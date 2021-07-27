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

Neste post pretendo explicar da forma mais concisa que eu conseguir e também como usaram a notação científica (IEEE 754 como uma das resoluções para este problema.