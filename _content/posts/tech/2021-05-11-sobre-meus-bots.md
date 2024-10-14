---
layout: post
title: Sobre Meus Bots
category: Bots
tags:
  - telegram
  - bot
  - sobre
date: 2021-08-04T16:55:39.335Z
post_date: 2021-08-04T16:55:40.274Z
cover: /images/uploads/robot-4363354_960_720.webp
isBanner: false
special: false
active: true
---
Há vários meses atrás eu desenvolvi alguns bots apra o telegram, sendo eles **`@ndefinitionbot`**, **`@whatsinthisfoodbot`**, **`@ntalesbot`** e **`@ntextifybot`**, e recentemente migrei eles para usarem a arquitetura serverless para que se tornem mais disponíveis.

Mantenha em mente que por estarem usando funções serverless na aws vocês podem expecienciar as tais chamadas *cold starts* e por isso... Minhas sinceras desculpas, estarei explicando o que cada bot faz e o que você pode esperar deles.

## @whatsinthisfoodbot

Perdão pelo longo nome, este bot usa a api da EDAMAN para buscar informações sobre a uma certa comida, sendo um prato, fruta entre outros. Pessoalmente não gostei muito do banco de dados da EDAMAN, mas foi o que encontrei e funcionou super bem e isto é o que você pode esperar:

![Buscando french fries (Batata Frita)](https://telegra.ph/file/dd7fcc3a25e24e0d88064.png "Buscando french fries (Batata Frita)")

Buscando "french fries" (Batata Frita)

![Resultado @whatsinthisfoodbot](https://telegra.ph/file/108e6b4b35734274bddcf.png "Resultado @whatsinthisfoodbot")

Resultado

## @ntalesbot

Este bot usa uma api em numbersapi.com para buscar algumas curiosidades sobre numeros, sendo sobre uma data especifica, curiosidades matemáticas ou curiosidades em geral.

![Buscando 275](https://telegra.ph/file/a0328b17abc166020ca88.png "Buscando 275")

Buscando "275"

## @ntextifybot

Este é o bot mais inútil que criei dentre todos os outros, ele apenas altera o texto enviado o tornando minúsculo, de cabeça para baixo, espelhado e o resultado pode ver a seguir:

![Resultado @ntextifybot](https://telegra.ph/file/f6c1386d60a53d350643f.png "Resultado @ntextifybot")

Então é por isso mesmo, se vocês tiverem alguma sugestão estarei mais do que feliz em escuta-las, sinta se livre para usar estes bots da forma que quiser, eu gastei mais tempo com \`@ndefinitionbot\` do que eu queria e ele ainda não funciona bem como eu gostaria, mas todos estes foram divertidos pequenos projetos que eu espero que seja de alguma forma útil para você.

Tenha um ótimo dia :)