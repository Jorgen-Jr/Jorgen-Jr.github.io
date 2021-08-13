---
layout: post
title: Deploy Automático de Websites Para o Github Pages
category: Tutorial
tags:
  - tutorial
date: 2021-08-13T14:12:01.862Z
post_date: 2021-08-13T14:12:03.141Z
cover: /images/uploads/auto_github_pages.jpg
isBanner: false
special: false
active: true
---
Vou demonstrar neste post como eu fiz a automatização do deploy deste meu blog usando github actions de forma super fácil também serve para sites estáticos ou geradores de site estático, no meu caso estou usando o **gatsby** no blog.

## Workflow de Referência

Este é o arquivo que uso atualmente para realizar o deploy do blog [Este arquivo pode ser encontrado aqui](https://gist.github.com/Jorgen-Jr/8b0d0a5ea008853e7332696b5d67e3dd#file-built-deploy-yml).

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
        run: npm install # Instalação de dependências.
      - name: Build pages
        run: yarn build # Script de build definido no package.json

      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }} # Segredo com a chave privada para acesso ssh
          publish_dir: ./public # Pasta onde estará a build e será copiada para a branch gh-pages.
```

Precisamente o que este arquivo define que sempre que ocorrer um push na branch principal (main) ira disparar um gatilho para que rode meu script de build definido no package.json e em seguida usando a biblioteca [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) para realizar o envio da pasta ./public na branch gh-pages, tornando-o disponível para o github pages. Para resumir ele irá executar os seguintes passos:

* Realizar um check-out para que o workflow tenha acesso ao repositório.
* Instalar todas as dependências necessárias para a build.
* Executar o script de build.
* E para finalizar ele usa o script de [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) usando os parâmetros que definimos para realizar o deploy.

Você pode obter outros exemplos para outras bibliotecas ou aplicações no repositório acima.

## Inicio

Primeiro você precisa criar este arquivo na pasta `.github/workflows/${nome_da_action}` na raiz do seu projeto para que possamos definir quais serão as actions.

Em seguida você precisa definir uma chave de acesso, no caso eu criei uma chave de deploy (deploy key) pois escolhi usar ssh, mas existem as opções de token do github ou token pessoal.

### Gerando chave SSH de deploy

Para gerar uma chave de ssh você pode usar o seguinte comando.

```textile
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```

Isso irá gerar dois arquivos, `gh-pages.pub` sendo a sua chave pública e `gh-pages` sendo sua chave privada.

Em seguira, navegue até a página de configuração do seu repositório e então DEPLOY_KEYS, clique em adicionar nova chave de deploy com o nome "public key of ACTION_DEPLOY_KEY", e cole sua chave pública nele.

![Screenshot chave publica de deploy](/images/uploads/blog_gihub_actions_public_deploy_key.png)

E então crie um secret com o nome "ACTION_DEPLOY_KEY" e cole sua chave privada.

![Screenshot chave privada de deploy.](/images/uploads/blog_gihub_actions_private_deploy_key.png)

> Pode escolher os nomes que desejar, apenas altere no arquivo yml conforme necessário.

### Primeiro deploy

Com isso você já pode realizar o primeiro deploy, e observar seu progresso na aba Actions do seu repositório.

![Aba de actions github.](/images/uploads/blog_gihub_actions_actions_tab.png)

Com a branch gh-pages criada, podemos ir para as configurações de repositório e na aba Pages onde podemos definir qual branch será a que irá ao ar, qual pasta entre outras configurações relacionadas.

![Aba de Pages](/images/uploads/blog_gihub_actions_pages_tab.png)

> Por eu ter colocado o nome do meu repositório meu nome de perfil + .github.io o github irá disponibilizar o website em ${nome_de_perfil}.github.io, caso contrario estaria em ${nome_de_perfil}.github.io/${nome_do_repositorio}.

## Referências

Para mais detalhes e guia para outros geradores estáticos (Hugo, Jekyll, Vue, Node, Flutter Web...)

* [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)