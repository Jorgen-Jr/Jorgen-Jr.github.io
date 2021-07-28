---
layout: post
title: Entendendo Operações com Pontos Flutuantes
category: Desenvolvimento
tags:
  - Desenvolvimento
  - pontosflutuantes
date: 2021-07-20T22:02:35.417Z
post_date: 2021-07-20T22:02:35.457Z
isBanner: false
special: false
active: true
---
Se você já realizou operações o suficiente com numeros flutuantes já deve ter passado com uma situação onde 0.1 + 0.2 = 0.30000000000000004, ou basicamente você tentou comparar os dois e concluindo que 0.1 + 0.2 != 0.3 por exemplo. 

Vi algumas pessoas culpando o Javascript ou a linguagem em si, mas na verdade este é um problema que deve ser levado um pouco mais a fundo para entender, tanto que criaram um site [explicando o porque disto acontecer](https://0.30000000000000004.com/).

Neste post pretendo explicar da forma mais concisa que eu conseguir e também como usaram a notação científica (IEEE 754) como referência para a criação de numeros "flutuantes".

## Numeros Inteiros

Primeiramente numeros inteiros que em C sao chamados de `long` significando que eles possuem 32bit sendo assim

> 00000000 00000000 00000000 00000000

usados para representar um numero, onde vocês já devem estar acostumados a lidar com numeros binários.

> 00000000 00000000 00000000 00000001 = 1
> 00000000 00000000 00000000 00000011 = 2
> 00000000 00000000 00000000 00000100 = 3

E por ai vai até chegar a 2 bilhões.

## Numeros Decimais

Assim como os numeros inteiros, os numeros decimais que em C são chamados de `float` tambem possuem 32bit, porém precisamos definir os decimais também, e como fariamos isso? Se fossemos arquitetar a representação desses numeros, provavelmente fariamos assim:

> 00000000 00000000 . 00000000 00000000

Simplesmente colocar um ponto decimal no meio, antes do ponto decimal contariamos da forma usual.

> 00000000 00000001 . 00000000 00000000 = 1.0
> 00000000 00000010 . 00000000 00000000 = 2.0
> 00000000 00000011 . 00000000 00000000 = 3.0
> 00000000 00000100 . 00000000 00000000 = 4.0

E após o numero decimal, não temos muitas surpresas também, mas devemos nos atentar que estamos lidando com numeros binários então ao invés de 10, 100 e 1000 nós teriamos:

> 00000000 00000100 . 10000000 00000000 = 4.5
> 00000000 00000100 . 01000000 00000000 = 4.75
> 00000000 00000100 . 00100000 00000000 = 4.125
> 00000000 00000100 . 00010000 00000000 = 4.0625

Em qualquer combinação, como por exemplo, um meio e um quarto seriam:

> 00000000 00000100 . 11000000 00000000 = 4.75

Mas esta idéia é na verdade horrível, porque detonamos com o tamanho do numero que podemos representar onde antes chevavamos a apróximadamente 2 bilhões, agora só podemos representar numeros até aproximádos 32 mil.

Para a nossa sorte, pessoas mais inteligentes que nós tiveram a idéia de se inspirar na notação científica e garantir um melhor uso desses 32bits, assim podemos representar numeros como 23'00 em 2.3*10⁴ e 0,32 como 3.2*10⁻³.

Se fossemos representa-los no sistema binário seria algo assim:

> 11'00 => 1.1x2⁴ seria sua representação em notação cientifica.
>
> 0.0101 => 0.01x2⁻³

Este método de representação carrega o nome **IEEE 754.**

## O Que Define IEEE 754?

Como de costume, nós receberemos os 32bits, porém como a seguir.

> 0 00000000 000000000000000000000000

Sendo o **primeiro bit** o bit do sinal, onde **0** significa que ele é positivo e **1** significa que ele é negativo.

> 0 00000000 000000000000000000000000 = x
> 1 00000000 000000000000000000000000 = -x

Os **próximos oito bits** representam o expoênte, sendo então:

> 0 00000001 000000000000000000000000 = x*2¹
> 0 00000010 000000000000000000000000 = x*2²
> 0 00000011 000000000000000000000000 = x*2³

E por ai vai, mas nos atentando que com 8 bits podemos representar numeros de **\[255-0]**, porém também vamos precisar de expoentes negativos, então por este motivo os numeros são movidos para **\[128-127]**, o que significa que ao invés de termos **x*2³*** *como no exemplo anterior, nós teremos **x*****2⁽³⁻¹²⁷⁾** e se quisermos que o expoente realmente seja 3, precisamos alterar os bits para 130 como a seguir:

> 0 10000100 000000000000000000000000 = **x*2⁽¹³⁰⁻¹²⁷⁾**

Porque 130 - 127 = 3.

E os ultimos 23 bits, representa a **mantissa**.