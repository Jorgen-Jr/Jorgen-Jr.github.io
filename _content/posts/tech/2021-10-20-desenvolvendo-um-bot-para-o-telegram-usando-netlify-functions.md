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
date: 2021-10-27T14:46:00.000Z
post_date: 2021-10-27T14:46:00.000Z
cover: /images/uploads/pexels-pixabay-209831.jpg
isBanner: false
special: false
active: true
---

Neste tutorial vou mostrar o passo a passo de como criar seu bot de telegram usando javascript e o serviço serverless netlify functions.
Ao final do post vou deixar nas disposições finais as desvantagens de usar este método, apesar de que o serviço ser gratuíto é bem interessante de usar.

## Sumário

1. [Criando Seu Bot](#criando-seu-bot)
2. [Iniciando o Projeto](#iniciando-o-projeto)
3. [Codando o Bot](#codando-o-bot)
4. [Subindo o Código Para o Netlify](#subindo-o-código-para-o-netlify)
5. [Configurando Webhook](#configurando-webhook)
6. [Disposições finais](#disposições-finais)

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

### Arquivo netlify.toml

Neste arquivo precisamos informar qual será a pasta com as funções serverless, como neste projeto ela está na pasta /functions/ podemos atribuir como a seguir:

```yaml
[build]
  functions = "./functions"
```

### **Criando as** Funções

**De acordo com a [documentação da API de bots](https://core.telegram.org/bots/api).**

Para este bot vamos usar estas 3 funções. Sendo o bot o nosso endpoint para receber as requests e as outras duas para responder essas requests.

-   bot.js
-   [answerInlineQuery.js](https://core.telegram.org/bots/api#answerinlinequery)
-   [sendMessage.js](https://core.telegram.org/bots/api#sendmessage)

A estrutura do nosso projeto deve estar assim:

![Estrutura do Projeto.](/images/uploads/screenshot-from-2021-10-20-14-10-35.png "Estrutura do Projeto")

Vamos estar usando o `axios`, então podemos usar o npm init para iniciar um projeto node e instalar esta dependencia com `npm install axios`

## Codando o Bot

[O repositório com o código deste bot poderá se encontrado aqui.](https://github.com/Jorgen-Jr/ola_usuario_bot)

### Função Principal

Está função será responsável por receber os updates sempre que o bot for contatado no telegram, mais a frente quando formos configurar nosso webhook será para essa função que iremos redirecionar.

```javascript
const axios = require("axios"); //Usando axios para realizar as requests.

exports.handler = async (event) => {
    const body = event.body; //Recebendo o body da request com as informações.

    const req = JSON.parse(body); //Convertendo a body em JSON.

    //Desestruturando apenas os objetos necessários para as funções. Nosso bot irá receber mensagens e comandos de inline query.
    const { message, inline_query } = req;

    let response = {}; //Inicializando nosso objeto de resposta. Que servirá para os dois tipos de resposta.

    //Respondendo comandos inline.
    if (inline_query) {
        //Comandos inline esperam um array com várias respostas, então vamos armazenar na variável results.
        const results = [];

        //O formato desta resposta pode ser referida aqui https://core.telegram.org/bots/api#answerinlinequery
        //Por hora apenas uma resposta é o suficiente então vou inserir apenas:
        results.push({
            type: "Article",
            id: results.length, //O ID da resposta.
            title: `Olá ${inline_query.from.first_name} ${inline_query.from.last_name}`, //O título da resposta.
            thumb_url:
                "https://raw.githubusercontent.com/Jorgen-Jr/Jorgen-Jr.github.io/main/src/assets/image/logo.png", //Imagem que irá aparecer na request.
            description: `Olá ${inline_query.from.first_name} ${inline_query.from.last_name}`,
            // Em seguida a resposta da inline query, que será entregue caso o usuário escolha esta resposta.
            input_message_content: {
                parse_mode: "HTML",
                message_text: `Olá ${inline_query.from.first_name} ${inline_query.from.last_name}, ${inline_query.query}`,
            },
        });

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

        //O formato da resposta pode ser referida aqui: https://core.telegram.org/bots/api#sendmessage
        response = {
            chat_id: chatId,
            text: `Olá ${message.from.first_name} ${message.from.last_name}.`,
            parse_mode,
        };

        await sendMessage(response);
    }

    //Função para enviar as mensagens
    async function sendMessage(response) {
        return await axios.post(
            "https://ola-usuario-bot.netlify.app/.netlify/functions/sendMessage",
            response
        );
    }

    //Função para responder comandos inline
    async function answerInlineQuery(response) {
        return await axios.post(
            "https://ola-usuario-bot.netlify.app/.netlify/functions/answerInlineQuery",
            response
        );
    }

    return {
        statusCode: 200,

        body: JSON.stringify(response),
    };
};
```

### Função answerInlineQuery

Vamos fazer uma função genérica para responder as inline queries respeitando a documentação do Telegram, sendo assim como já estamos recebendo a estrutura corretamente da função principal, nosso código pode ficar assim.

```javascript
const axios = require("axios");

exports.handler = async (event) => {
    console.log("Enviando o resultado da inline query.");

    const body = event.body; //Receber o resultado da request resultante do bot.js

    const response = JSON.parse(body);

    //Criar URL de acesso usando as variáveis de ambiente.
    const bot_url = "https://api.telegram.org/bot" + process.env.BOT_TOKEN;

    //Enviar a resposta de volta para o telegram.
    const res = await axios.post(bot_url + "/answerInlineQuery", response);

    return {
        statusCode: res.status,
        body: JSON.stringify({ message: "Query finalizada." }),
    };
};
```

### Função sendMessage

Partindo da mesma idéia da função anterior, nossa request só irá alterar o método usado na chamada da api do telegram.

```javascript
const axios = require("axios");

exports.handler = async (event) => {
    console.log("Respondendo ao usuário.");

    const body = event.body; //Receber o resultado da request resultante do bot.js

    const response = JSON.parse(body);

    //Criar URL de acesso usando as variáveis de ambiente.
    const bot_url = "https://api.telegram.org/bot" + process.env.BOT_TOKEN;

    //Enviar a resposta de volta para o telegram.
    const res = await axios.post(bot_url + "/sendMessage", response);

    return {
        statusCode: res.status,
        body: JSON.stringify({ message: "Message sent." }),
    };
};
```

## Subindo o Código Para o Netlify

Faça o upload do seu código no github, gitlab ou bitbucket, no meu caso estarei usando o github. Este passo é necesário pois o netlify requere que seja ativado a integração de implantação contínua para usar as cloud functions.

Acesse o [netlify](https://app.netlify.com/start) e indique qual repositório ele vai usar.

![Criando o website no netlify.](/images/uploads/screenshot-from-2021-10-20-14-47-05.png "Criando o website no netlify.")

![Criando o website no netlify pt.2](/images/uploads/screenshot-from-2021-10-20-14-48-12.png "Criando o website no netlify pt.2")

Com as configurações padrão, ele irá fazer o primeiro deploy, sem misterios, eu apenas troquei o nome padrão do site para ficar mais fácil de acessar. Em "Site Settings" e em Site information deve ter um botão chamado "Change Site Name".

![Trocando o nome do site.](/images/uploads/screenshot-from-2021-10-20-14-50-21.png "Trocando o nome do site.")

E também precisamos adcionar o TOKEN do bot nas variáveis de ambiente, para que não fiquem expostas no nosso repositório.

![Adcionando o token de acesso.](/images/uploads/screenshot-from-2021-10-20-14-55-16.png "Adcionando o token de acesso.")

## Configurando WebHook

[Eu deixei preparado um arquivo do insomnia que vocês podem usar para esta parte caso achem mais fácil.](https://github.com/Jorgen-Jr/ola_usuario_bot/blob/master/docs/insomnia.json)

Estarei usando as variáveis de ambiente do insonmia e elas estão configuradas assim:

![Variáveis do insomnia.](/images/uploads/screenshot-from-2021-10-22-09-29-07.png "Variáveis do insomnia.")

Então podemos ir na pasta Telegram e executar a rota `setWebhook` como a seguir:

![Executando o setWebhook.](/images/uploads/screenshot-from-2021-10-22-09-31-05.png "Executando o setWebhook.")

Com isso nosso bot já deve estar funcionando, mas podemos confirmar que o webhook foi aceito executando o `getWebhookInfo.`

![getWebhookInfo](/images/uploads/screenshot-from-2021-10-22-09-33-18.png "getWebhookInfo")

## Bot em Funcionamento

Agora se acessarmos o bot ele já deve nos responder com "Olá, `primeiro nome` e `ultimo nome`" para qualquer mensagem que enviarmos no chat dele, ou para qualquer comando inline.

![Mensagem.](/images/uploads/screenshot-from-2021-10-22-09-38-06.png "Mensagem.")

![Comando inline](/images/uploads/screenshot-from-2021-10-22-09-39-27.png "Comando inline.")

Claro, este é apenas um projeto simples demonstrando como o netlify functions pode ser usada com os bots do telegram, mas é possível fazer bastante coisa com apenas isso. Você pode ler sobre alguns de meus bots que funcionam usando este mesmo método [aqui sobre o meu bot de dicionário](https://jorgen-jr.github.io/blog/2021-05-11-sobre-ndefinitionbot/) e [aqui sobre outros bots que desenvolvi](https://jorgen-jr.github.io/blog/2021-05-11-sobre-meus-bots/). Todos estão com o código fonte liberados no meu perfil no github.

## Disposições Finais

As cloud functions são ótimas pra isso por não precisarem de um servidor dedicado rodando 24/7 para que o bot funcione, mas são limitadas as funções de resposta rápida pois elas devem respeitar o limite de resposta em 10 segundos, o mesmo limite também é usado para respostas de inline_query então esse limite é aceitável, mas devemos ter em mente de que podemos experienciar as cold starts e a depender do tamanho da função isso pode impactar negativamente o funcionamento do bot causando problemas de resposta e time-outs, por isso para aplicações mais complexas ou de longa execução essa abordagem é de longe a melhor indicada.

![Execuçao da funçao principal.](/images/uploads/screenshot-from-2021-10-25-15-18-27.png "Execuçao da funçao principal.")

Porem, para aplicações simples até que isso cumpre sua função e é completamente gratuíto então pode ser uma alternativa atraente para alguns. E caso contrário por estar em javascript é bem fácil de reescrever tudo em nodejs e abrir um servidor dedicado somente para isso.
