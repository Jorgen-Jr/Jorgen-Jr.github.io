---
layout: project
name: TheDictApi
short_description: TheDictApi
category: Backend
tags:
    - Javascript
    - NodeJS
    - Cheerio
    - Web-Scrapper
icon: /images/uploads/book-158110_640.png
cover: /images/uploads/pexels-iconcom-226611.jpg
link: thedictapi
theme_color_primary: "#228aff"
active: true
---

# TheDictApi

[![Netlify Status](https://api.netlify.com/api/v1/badges/21b938bf-5732-43f6-803c-85c563b5c16e/deploy-status)](https://app.netlify.com/sites/thedictapi/deploys)

> Esta api é capaz de buscar o significado de palavras com a ajuda [Cheerio](https://cheerio.js.org/).

### Usage

> Mantenha em mente que esta api usa funções serverless, então cold starts podem acontecer e causar uma certa lentidão.

Você consegue usar esta api enviando requests do tipo GET para os seguintes endereços

-   `https://thedictapi.netlify.app/.netlify/functions/thesaurus/{word}`
-   `https://thedictapi.netlify.app/.netlify/functions/urbandictionary/{word}`
-   `https://thedictapi.netlify.app/.netlify/functions/priberam/{word}`

Alterando o `{word}` pela palavra desejada.
A resposta será enviada em formato json.

### Opções

Existe atualmente as seguintes opções de dicionário.

-   Thesaurus (With the english definition)
-   Urban Dictionary (With the Urban Dictionary definition in case of slangs)
-   Priberam (Para palavras em português)

### Referências Externas

Esse bot usa os seguintes sites como referência:

-   [Thesaurus](http://word.com);
-   [UrbanDictionary](http://urbandictionary.com);
-   [Priberam](https://dicionario.priberam.org);

### Em Breve

-   [Dicionário Popular](https://www.dicionariopopular.com/);
