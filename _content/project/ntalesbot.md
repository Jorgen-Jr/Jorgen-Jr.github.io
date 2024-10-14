---
layout: project
name: nTalesBot
short_description: nTalesBot
category: Bots
tags:
    - Javascript
    - TelegramBot
    - NodeJs
    - Serverless
cover: http://numbersapi.com/img/background.jpg?1582176005
icon: /images/uploads/ntalesbot.png
link: ntalesbot
theme_color_primary: "#b821a4"
theme_color_secondary: "#2fbfdc"
active: true
---

# nTalesBot

> Eu queria aprender como os bots do telegram funcionam, então eu fiz este pequeno bot que busca curiosidades de um certo numero através de [comandos em linha **(inline commands)**](https://core.telegram.org/bots/inline).

Deve retornar uma lista de curiosidades sobre o numero enviado.

### Uso

Começe digitando `@ntalesbot` em qualquer chat e o numero desejada e ele vai devolver a lista de curiosidades. É um bot bem simples.

### Opções

Você terá as seguintes opções quando enviar o numero para o bot.

-   Trivia: Irá retornar uma curiosidade qualquer sobre o numero.
-   Math: Irá retornar uma curiosidade matemática sobre o numero.
-   Data: Irá retornar uma curiosidade sobre um certo evento que ocorreu na data desejada. **Deve estar num formato Mês/Ano ou menor que 31, que neste caso será inferido uma data de janeiro**
-   Ano: Irá retornar algum evento que ocorreu no ano enviado.

### Referências Externas

Este bot usa a seguinte api [Numbers API](http://numbersapi.com), meus grandes agradecimentos ao David e Mack por prover esta api.
