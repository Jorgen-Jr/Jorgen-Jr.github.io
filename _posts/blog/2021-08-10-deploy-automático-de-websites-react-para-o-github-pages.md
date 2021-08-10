---
layout: post
title: Deploy Automático de Websites React Para o Github Pages
category: Tutorial
tags:
  - tutorial
date: 2021-08-10T18:33:56.619Z
post_date: 2021-08-10T18:33:56.662Z
isBanner: false
special: false
active: true
---
Vou demonstrar neste post como eu fiz a automatização do deploy deste meu blog usando github actions de forma super fácil e serve também para outras bibliotecas do react, no meu caso estou usando o gatsby no blog.

# Workflow

[Este arquivo pode ser encontrado aqui](https://gist.github.com/Jorgen-Jr/8b0d0a5ea008853e7332696b5d67e3dd#file-built-deploy-yml)

```yaml
name: Deploy
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x]
    steps:
      - uses: actions/checkout@v1

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install Packages
        run: npm install
      - name: Build pages
        run: yarn build

      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          publish_dir: ./public
```

Precisamente o que este arquivo define, primeiro dei o nome deste workflow de Deploy, e sempre que ocorrer um push na branch principal (main) ira disparar um gatilho para que rode meu script de build definido no package.json e em seguida usando a biblioteca [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) para realizar o envio da pasta ./public na branch gh-pages, tornando-o disponivel para o github pages.