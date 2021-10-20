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
3. [Codando o Bot](#codando-o-bot)
4. [Subindo seu codigo](#subindo-seu-codigo)

## Criando Seu Bot

Primeiro vamos criar nosso bot usando o [@BotFather](tg://resolve?domain=BotFather).

![Conversando com o BotFather](/images/uploads/screenshot-from-2021-10-20-13-45-11.png "BotFather")

Clique em Start/Iniciar para iniciar o processo de criação do bot. Use o comando `/newbot` para criarmos o nosso bot.

![Comando /newbot ](/images/uploads/screenshot-from-2021-10-20-13-47-38.png "Comandos BotFather.")

Em seguida ele irá perguntar pelo nome do bot, só para tests, vou dar o nome de Olá Usuário.

E então devemos escolher o nome de usuário do bot, que deve terminar com "bot", vou dar o nome de ola_usuario_bot.

Ele irá devolver as informações do bot e seu token de acesso como a seguir.

![Criando o novo bot.](/images/uploads/screenshot-from-2021-10-20-13-51-23.png "Criando o bot.")

### Configurando inline mode.

Acesse seus bots usando o comando `/mybots` e selecione o bot que acabou de criar.

![Configurando o Inline Mode](/images/uploads/screenshot-from-2021-10-20-15-18-39.png "Configurando o Inline Mode")

Em seguida clique em `Bot Settings`.

![Bot Settings.](/images/uploads/screenshot-from-2021-10-20-15-19-58.png "Bot Settings.")

E então em `Inline Mode` e então em `Turn On.`

![Inline Mode.](/images/uploads/screenshot-from-2021-10-20-15-20-49.png "Inline Mode.")

Agora podemos ir para o código.

## Iniciando o Projeto

Como é um projeto simples em javascript, esta é a configuração básica para podermos começar.

![Project Init](/images/uploads/screenshot-from-2021-10-20-13-58-09.png "Iniciando o projeto")

Sendo que precisamos do arquivo netlify.toml para definir onde nossas funções serveless estarão, e uma pasta functions para colocar as tais funções.

Abra a pasta raíz do projeto na ide que preferir.

\### Arquivo netlify.toml

Neste arquivo precisamos informar qual será a pasta com as funções serverless, como neste projeto ela está na pasta /functions/ podemos atribuir como a seguir:

```yaml
[build]
  functions = "./functions"
```

\### Criando as funções de acordo com a [documentação da API de bots](https://core.telegram.org/bots/api).

Para este bot vamos usar estas 3 funções. Sendo o bot o nosso endpoint para receber as requests e as outras duas para responder essas requests.

* bot.js
* [answerInlineQuery.js](https://core.telegram.org/bots/api#answerinlinequery)
* [sendMessage.js](https://core.telegram.org/bots/api#sendmessage)

A estrutura do nosso projeto deve estar assim:

![Estrutura do Projeto.](/images/uploads/screenshot-from-2021-10-20-14-10-35.png "Estrutura do Projeto")

Vamos estar usando o `axios`, então podemos usar o npm init para usar o package json e instalar esta dependencia com `npm install axios`

## Codando o Bot

### Função Principal

## Subindo seu codigo

Faça o upload do seu código no github, gitlab ou bitbucket, no meu caso estarei usando o github.

Acesse o [netlify](https://app.netlify.com/start) e indique qual repositório ele vai usar.

![Criando o website no netlify.](/images/uploads/screenshot-from-2021-10-20-14-47-05.png "Criando o website no netlify.")

![Criando o website no netlify pt.2](/images/uploads/screenshot-from-2021-10-20-14-48-12.png "Criando o website no netlify pt.2")

Com as configurações padrão, ele irá fazer o primeiro deploy, sem misterios, eu apenas troquei o nome padrão do site para ficar mais fácil de acessar.

![Trocando o nome do site.](/images/uploads/screenshot-from-2021-10-20-14-50-21.png "Trocando o nome do site.")

E também precisamos adcionar o TOKEN do bot nas variáveis de ambiente, para que não fiquem expostas no nosso repositório.

![Adcionando o token de acesso.](/images/uploads/screenshot-from-2021-10-20-14-55-16.png "Adcionando o token de acesso.")