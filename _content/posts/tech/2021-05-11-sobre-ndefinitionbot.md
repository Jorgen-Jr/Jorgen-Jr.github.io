---
layout: post
title: Sobre nDefinitionBot
category: bot
domain: tech
tags:
    - telegram
    - bot
    - sobre
date: 2021-06-16T15:15:53.995Z
post_date: 2021-06-16T15:15:54.006Z
cover: /images/uploads/bd81e85af9cc0febb2acb.jpg
isBanner: false
special: false
active: true
---

Há alguns meses atrás eu desenvolvi alguns bots para o telegram, sendo eles **@ndefinitionbot**, **@whatsinthisfoodbot**, **@ntalesbot** e **@ntextifybot**, no início eles rodavam na minha máquina local, em containers usando o docker, atualmente eles usam _serverless functions_ para que se tornem mais disponíveis. Futuramente pretendo disponibilizar um tutorial de como foi o processo de desenvolvimento de um desses bots.

Tenha em mente que por estar usando serverless functions alguns clientes podem sentir as conhecidas cold starts, mas do jeito que foi aplicado estão em níveis aceitáveis.

Para usar bots embutidos (inline bots) é bem fácil no telegram, basta digitar a tag do bot e em seguida inserir sua query. Como mostra a imagem a seguir.

![Resultados para a query "radio"](/images/uploads/imagem1.png "Resultados para a query radio'")

E então selecionando o resultado que deseja, ele deve enviar para o recipiente o significado.

![Resultado para o recipiente desejado.](/images/uploads/imagem2.png "Resultado para o recipiente desejado.")

O `@ndefinitionbot` usa uma api que desenvolvi usando web scrappers que pode ser vista em [The Dict Api](https://github.com/Jorgen-Jr/TheDictApi) que mais a frente estará na lista dos projetos em meu portfolio.

Tal api permite que possamos buscar resultados em formato json dos sites:

-   [Thesaurus](http://word.com);
-   [UrbanDictionary](http://urbandictionary.com);
-   [Priberam](https://dicionario.priberam.org);

Que atualmente são as opções de resultados para o bot.
