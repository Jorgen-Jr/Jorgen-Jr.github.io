---
layout: post
title: Entendendo Operações com Pontos Flutuantes
category: Desenvolvimento
tags:
  - Desenvolvimento
  - pontosflutuantes
date: 2021-07-28T16:49:03.006Z
post_date: 2021-07-28T16:49:04.242Z
cover: /images/uploads/pexels-karolina-grabowska-4589440.jpg
isBanner: false
special: false
active: true
---
Se você já realizou operações o suficiente com números flutuantes já deve ter passado com uma situação onde 0.1 + 0.2 = 0.30000000000000004, ou basicamente você tentou comparar os dois e concluindo que 0.1 + 0.2 != 0.3 por exemplo. 

Vi algumas pessoas culpando o Javascript ou a linguagem em si, mas na verdade este é um problema que deve ser levado um pouco mais a fundo para entender, tanto que criaram um site explicando o porque disto acontecer.

Neste post pretendo explicar da forma mais concisa que eu conseguir e também como usaram a notação científica (IEEE 754) como referência para a criação de números "flutuantes".

## Números Inteiros

Primeiramente números inteiros que em C sao chamados de `long` significando que eles possuem 32bit sendo assim

> 00000000 00000000 00000000 00000000

usados para representar um numero, onde vocês já devem estar acostumados a lidar com números binários.

> 00000000 00000000 00000000 00000001 = 1
>
> 00000000 00000000 00000000 00000011 = 2
>
> 00000000 00000000 00000000 00000100 = 3

E por ai vai até chegar a 2 bilhões.

## Números Decimais

Assim como os numeros inteiros, os números decimais que em C são chamados de `float` tambem possuem 32bit, porém precisamos definir os decimais também, e como fariamos isso? Se fossemos arquitetar a representação desses numeros, provavelmente fariamos assim:

> 00000000 00000000 . 00000000 00000000

Simplesmente colocar um ponto decimal no meio, antes do ponto decimal contaríamos da forma usual.

> 00000000 00000001 . 00000000 00000000 = 1.0
>
> 00000000 00000010 . 00000000 00000000 = 2.0
>
> 00000000 00000011 . 00000000 00000000 = 3.0
>
> 00000000 00000100 . 00000000 00000000 = 4.0

E após o numero decimal, não temos muitas surpresas também, mas devemos nos atentar que estamos lidando com números binários então ao invés de 10, 100 e 1000 nós teriamos:

> 00000000 00000100 . 10000000 00000000 = 4.5
>
> 00000000 00000100 . 01000000 00000000 = 4.75
>
> 00000000 00000100 . 00100000 00000000 = 4.125
>
> 00000000 00000100 . 00010000 00000000 = 4.0625

Em qualquer combinação, como por exemplo, um meio e um quarto seriam:

> 00000000 00000100 . 11000000 00000000 = 4.75

Mas esta ideia é na verdade horrível, porque detonamos com o tamanho do numero que podemos representar onde antes chegavamos a apróximadamente 2 bilhões, agora só podemos representar numeros até aproximádos 32 mil.

Para a nossa sorte, pessoas mais inteligentes que nós tiveram a ideia de se inspirar na notação científica e garantir um melhor uso desses 32bits, assim podemos representar números como 23'00 em 2.3*10⁴ e 0,32 como 3.2*10⁻³.

Se fossemos representá-los no sistema binário seria algo assim:

> 11'00 => 1.1x2⁴ seria sua representação em notação cientifica.
>
> 0.0101 => 0.01x2⁻³

Este método de representação carrega o nome **IEEE 754.**

## O Que Define IEEE 754?

Como de costume, nós receberemos os 32bits, porém como a seguir.

> 0 00000000 000000000000000000000000

Sendo o **primeiro bit** o bit do sinal, onde **0** significa que ele é positivo e **1** significa que ele é negativo.

> 0 00000000 000000000000000000000000 = x
>
> 1 00000000 000000000000000000000000 = -x

Os **próximos oito bits** representam o expoente, sendo então:

> 0 00000001 000000000000000000000000 = x*2¹*
>
> 0 00000010 000000000000000000000000 *\= x*2²
>
> 0 00000011 000000000000000000000000 = x*2³

E por ai vai, mas nos atentando que com 8 bits podemos representar números de **\[255-0]**, porém também vamos precisar de expoentes negativos, então por este motivo os números são movidos para **\[128-127]**, o que significa que ao invés de termos **x*2³*** *como no exemplo anterior, nós teremos **x\*\****2⁽³⁻¹²⁷⁾\*\* e se quisermos que o expoente realmente seja 3, precisamos alterar os bits para 130 como a seguir:

> 0 10000100 000000000000000000000000 = **x*2⁽¹³⁰⁻¹²⁷⁾**

Porque 130 - 127 = 3.

E os últimos 23 bits, representa a **mantissa**. Quando tratamos de notaçao cientifica nos queremos definir um digito, uma virgula e os decimais, mas com 23 bits podemos definir de 0 ate 2²³ e nao e exatamente disso que precisamos, porque precisamos da mantissa de ir de 1 ate 10, ou em notacao cientifica binaria, de ir de 1 ate 2. Podemos tentar novamente fazer oque fizemos da ultima vez e tentar adcionar uma virgula apos o primeiro bit.

> 0 10000100 0**.**0000000000000000000000

Ai podemos definir de 

> 0 10000100 **1.**0000000000000000000000 = 1.000*2⁴
>
> 0 10000100 **1.**1111111111111111111111 = 1.999*2⁴

Mas essa soluçao disperdiça um armazenamento, as pessoas que fizeram o design desse padrao perceberam que quando estamos lidando com numeros binarios algo acontece que nao acontece em nenhuma outra base.

> 11'000   **1**.1*2⁴ Preste atençao no primeiro digito.
> 0.0101   **1**.01*2⁻³ Por definicao, este numero sempre sera nao zero.

Mas em binario existe so existe um numero que nao e zero **1**. Ou seja, se sabemos que o primeiro digito sempre sera 1, nao precisamos guarda-lo, podemos salvar um bit movendo a virgula para esquerda e deixarmos este numero **1** fixo. Agora nossa mantissa esta entre 1 e 2.

> 0 10000100 **.**00000000000000000000000

Por mais que os 23 bits nos deem um alcanse de 0 ate 2*²³ nos diminuimos para conseguir numeros entre 0 e 1 e entao fixamos o numero 1 para conseguir numeros entre 1 e 2 e esta e a parte principal do padrao IEEE 754, mas para os tais numeros normalizados, sei que os leitores informados sabem que eles tambem incluem numeros nao normalizados, NaN, infinitos e 0 & 0 que talvez eu entre em detalhes num post futuro.

## Ta, mas e ai?

Bom, agora que sabemos como os numeros flutuantes são armazenados, tudo isso se resume as bases usadas, os computadores não lidam com números da mesma forma que nós lidamos, eles precisam converter para binário e depois para decimal e quando convertemos para a base 10 acabamos tendo que lidar com algumas "sobras". o padrão IEEE dita que todas as operações devem ser arredondadas de forma exata, isso significa que todos os resultados devem ser computados de forma exata e então arredondados, e durante essa conversão perdemos essa precisão devido a isso, o que a representação IEEE certifica é que este arredondamento esteja dentro de um certo limite.\
Como podemos ver a seguir usando uma ferramenta de conversão.

![Conversão de numeros float.](/images/uploads/floating_point_converter.png "Tool Used: https://www.h-schmidt.net/FloatConverter/IEEE754.html")

*(Ferramenta usada:* <https://www.h-schmidt.net/FloatConverter/IEEE754.html>*)*

\
*Referências:*

[What Every Computer Scientist Should Know About Floating-Point Arithmetic](http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)

[0.30000000000000004.com](https://0.30000000000000004.com/)

[Float Converter](<  https://www.h-schmidt.net/FloatConverter/IEEE754.html>)

[An Introdution to Floating Point](https://indico.cern.ch/event/626147/attachments/1456066/2247140/FloatingPoint.Handout.pdf) by Jeff Arnold

[Fast Inverse Square Root from Quake III](https://youtu.be/p8u_k2LIZyo?t=258)