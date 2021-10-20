---
layout: post
title: Desenvolvendo um Bot para o Telegram usando Netlify Functions
category: Desenvolvimento
tags:
  - tutorial
  - backend
  - javascript
  - bot
  - telegram
date: 2021-10-20T16:20:37.825Z
post_date: 2021-10-20T16:20:37.864Z
isBanner: false
special: false
active: true
---
Neste tutorial vou mostrar o passo a passo de como criar seu bot de telegram usando javascript e o serviço serverless netlify functions.

# Table of Contents

1. [Criando Seu Bot](#criando-seu-bot)
2. [Iniciando o Projeto](#iniciando-o-projeto)

## Criando Seu Bot

Primeiro vamos criar nosso bot usando o [@BotFather](tg://resolve?domain=BotFather).

![Conversando com o BotFather](/images/uploads/screenshot-from-2021-10-20-13-45-11.png "BotFather")

Clique em Start/Iniciar para iniciar o processo de criação do bot. Use o comando `/newbot` para criarmos o nosso bot.

![Comando /newbot ](/images/uploads/screenshot-from-2021-10-20-13-47-38.png "Comandos BotFather.")

Em seguida ele irá perguntar pelo nome do bot, só para tests, vou dar o nome de Olá Usuário.

E então devemos escolher o nome de usuário do bot, que deve terminar com "bot", vou dar o nome de ola_usuario_bot.

Ele irá devolver as informações do bot e seu token de acesso como a seguir.

![Criando o novo bot.](/images/uploads/screenshot-from-2021-10-20-13-51-23.png "Criando o bot.")

Agora podemos ir para o código.

## Iniciando o Projeto

Como é um projeto simples em javascript, esta é a configuração básica para podermos começar.

![Project Init](/images/uploads/screenshot-from-2021-10-20-13-58-09.png "Iniciando o projeto")

Sendo que precisamos do arquivo netlify.toml para definir onde nossas funções serveless estarão, e uma pasta functions para colocar as tais funções.