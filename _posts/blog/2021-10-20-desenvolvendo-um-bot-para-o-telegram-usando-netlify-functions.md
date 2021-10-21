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
Ao final do post vou deixar nas disposições finais as desvantagens de usar este método, apesar de que o serviço ser gratuíto é bem interessante de usar.

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

```
const axios = require('axios'); //Usando axios para realizar as requests.

exports.handler = async event => {
    const body = event.body; //Recebendo o body da request com as informações.

    const req = JSON.parse(body); //Convertendo a body em um arquivo JSON.

    const { message, inline_query } = req;
    //Desestruturando apenas os objetos necessários para as funções. Nosso bot irá receber mensagens e comandos de inline query.

    let response = {}; //Iniciando nosso objeto de resposta. Que servirá para os dois tipos de resposta.

    //Respondendo comandos inline.
    if (inline_query) {
        //Comandos inline esperam um array com várias respostas, então vamos armazenar na variável results.
        const results = [];

        //Por hora apenas uma resposta é o suficiente então vou inserir apenas:
        results.push({
            type: "Article", //O tipo de resposta da inline query
            id: results.length, //O ID da resposta.
            title: `Olá ${inline_query.from.first_name} ${inline_query.from.last_name}`, //O título da resposta.
            thumb_url: "https://raw.githubusercontent.com/Jorgen-Jr/Jorgen-Jr.github.io/main/src/assets/image/logo.png", //Imagem que irá aparecer na request.
            description: `Olá ${inline_query.from.first_name} ${inline_query.from.last_name}`,
            // Em seguida a resposta da inline query, que será entregue caso o usuário escolha esta resposta.
            input_message_content: {
                parse_mode: "HTML",
                message_text: `Olá ${inline_query.from.first_name} ${inline_query.from.last_name}, ${inline_query.query}`,
            },
        });

        /* Armazenando a resposta com o resultado. */
        response = {
            inline_query_id: inline_query.id,
            results,
        };

        await answerInlineQuery(response);
    }
    //Respondendo mensagens.
    else if (message) {
        const chatId = message.chat.id;

        const parse_mode = "HTML";

        response = {
            chat_id: chatId,
            text: `Olá ${message.from.first_name} ${message.from.last_name}.`,
            parse_mode,
        }

        await sendMessage(response);
    }

    async function sendMessage(response) {
        return await axios.post('https://ola-usuario-bot.netlify.app/.netlify/functions/sendMessage', response);
    }

    async function answerInlineQuery(response) {
        return await axios.post('https://ola-usuario-bot.netlify.app/.netlify/functions/answerInlineQuery', response);
    }

    return {
        statusCode: 200,

        body: JSON.stringify(response),
    }
}
```

### Função answerInlineQuery

Vamos fazer uma função genérica para responder as inline queries respeitando a documentação do Telegram, sendo assim como já estamos recebendo a estrutura corretamente da função principal, nosso código pode ficar assim.

```javascript
const axios = require('axios');

exports.handler = async event => {
    console.log("Enviando o resultado da inline query.");

    const body = event.body; //Receber o resultado da request resultante do bot.js

    const response = JSON.parse(body);

    //Criar URL de acesso usando as variáveis de ambiente.
    const bot_url = "https://api.telegram.org/bot" + process.env.BOT_TOKEN;

    //Enviar a resposta de volta para o telegram.
    const res = await axios.post(bot_url + '/answerInlineQuery', response);

    return {
        statusCode: res.status,
        body: JSON.stringify({ message: "Query finalizada." }),
    }
}
```

### Função sendMessage

Partindo da mesma idéia da função anterior, nossa request só irá alterar o método usado na chamada da api do telegram.

```javascript
const axios = require('axios');

exports.handler = async event => {
    console.log("Respondendo ao usuário.");

    const body = event.body;  //Receber o resultado da request resultante do bot.js

    const response = JSON.parse(body);

    //Criar URL de acesso usando as variáveis de ambiente.
    const bot_url = "https://api.telegram.org/bot" + process.env.BOT_TOKEN;

    //Enviar a resposta de volta para o telegram.
    const res = await axios.post(bot_url + '/sendMessage', response);

    return {
        statusCode: res.status,
        body: JSON.stringify({ message: "Message sent." }),
    }
}
```

## Subindo seu codigo

Faça o upload do seu código no github, gitlab ou bitbucket, no meu caso estarei usando o github.

Acesse o [netlify](https://app.netlify.com/start) e indique qual repositório ele vai usar.

![Criando o website no netlify.](/images/uploads/screenshot-from-2021-10-20-14-47-05.png "Criando o website no netlify.")

![Criando o website no netlify pt.2](/images/uploads/screenshot-from-2021-10-20-14-48-12.png "Criando o website no netlify pt.2")

Com as configurações padrão, ele irá fazer o primeiro deploy, sem misterios, eu apenas troquei o nome padrão do site para ficar mais fácil de acessar.

![Trocando o nome do site.](/images/uploads/screenshot-from-2021-10-20-14-50-21.png "Trocando o nome do site.")

E também precisamos adcionar o TOKEN do bot nas variáveis de ambiente, para que não fiquem expostas no nosso repositório.

![Adcionando o token de acesso.](/images/uploads/screenshot-from-2021-10-20-14-55-16.png "Adcionando o token de acesso.")