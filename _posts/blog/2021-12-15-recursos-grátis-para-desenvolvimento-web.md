---
layout: post
title: Recursos Grátis para Desenvolvimento Web
category: Extra Bits
tags:
  - tips
  - free
  - resources
  - web_development
date: 2021-12-15T16:43:55.103Z
post_date: 2021-12-15T16:43:55.181Z
cover: /images/uploads/cutte.webp
isBanner: false
special: false
active: true
---
Quando estamos iniciando em desenvolvimento web e sempre bom ter formas gratuitas de colocar seu projeto no ar e mostrar para quem quiser sem a necessidade de estar rodando no seu computador. Neste post vou listar algumas plataformas onde isso e possível.

1. [Páginas Estáticas](#páginas-estáticas)
   1. [Netlify](#netlify)
   2. [Github Pages](#github-pages)
2. [Back-End](#backend)
   1. [Heroku](#heroku)
   2. [Firebase](#firebase)
3. [Banco de Dados](#banco-de-dados)
   1. [ElephantSQL](#elephantsql)
   2. [AtlasDB](#atlasdb)
   3. [FreeMySQLHosting](#freemysqlhosting)
4. [CronJobs](#cronjobs)
5. [Tunelização](#tunelização)
   1. [Ngrok](#ngrok)
   2. [StaqLab](#staqlab)

## Páginas Estáticas

### Netlify

![Acesse a Netlify](https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg "Logo Netlify")

A [netlify](https://www.netlify.com/) apresenta uma otima solução desenvolvimento de sites web, tornando o processo de deploy rapido e intuitivo, tambem conta com varias features como [Netlify Functions](https://functions.netlify.com/) que são cloud functions permitindo que possua um backend em sua aplicação, [tais functions que usei para criar alguns bots para o telegram](https://jorgen-jr.github.io/blog/2021-10-20-desenvolvendo-um-bot-para-o-telegram-usando-netlify-functions/) e [Netlify CMS](https://www.netlifycms.org/) que é o gerenciador de conteúdo que estou usando atualmente.

Tal ferramenta também possui funcionalidades de previews de build, integração com o github então toda vez que ocorrer um push no repositório ele irá iniciar a build da aplicação, sendo a branch `master` ou `main` a build que irá para o subdominio desejado e suas outras branchs apenas para review (isso pode ser controlado nas configurações de deploy.

### Github Pages

![Octocat - Github](/images/uploads/octocat.png "Octocat - Github")

Githuh pages funciona muito bem para seus projetos do github, se integra super bem com o github actions para automatizar a build caso necessário [como exemplificado aqui](https://jorgen-jr.github.io/blog/2021-08-10-deploy-autom%C3%A1tico-de-websites-react-para-o-github-pages/), seu dominio sera atrelado aos subdominios do github, cujo será `nome_de_usuário.github.io/repositório` ou, se seu repositório tiver o nome `nome_de_usuario.github.io` este será seu dominio.

Você pode ler mais sobre isso [aqui](https://docs.github.com/en/pages).

## Back-end

### Heroku

![Heroku Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/640px-Heroku_logo.svg.png "Heroku Logo")

### Firebase

![Firebase Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Firebase_Logo.png/640px-Firebase_Logo.png "Firebase Logo")

### Render

## CronJobs

![cron-jon.org](https://cron-job.org/img/logo.png "cron-jon.org")

Os cron-jobs são úteis em aplicações onde é necessário executar algo de tempos em tempos, assim você pode programar para executar algo em sua api em tais dias e tais horas de forma automática. Seja um script ou seu site.

[Pode ser acessado aqui](https://cron-job.org/)

## Banco de Dados

### ElephantSQL

![ElephantSQL](https://www.elephantsql.com/favicon.ico "ElephantSQL")

Banco de dados Postgres com 20 megas grátis. Rápido e de fácil conexão. 

[Pode ser acessado aqui](https://www.elephantsql.com/).

### AtlasDB

![AtlasDB](https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress "AtlasDB")

Banco de dados do tipo MongoDB, orientado a objetos, de ate 512 megas gratuítos, [já escrevi sobre esse banco em outro post](https://jorgen-jr.github.io/blog/2021-11-10-criando-um-webscrapper-com-python/).

[Pode ser acessado aqui](https://www.mongodb.com/).

### FreeMySQLHosting
Banco de Dados relacional usando MySQL, com até 5 megas gratuítos, não usei muito, mas é bom ter uma opção MySQL para alguns casos.

[Pode ser acessado aqui](https://www.freemysqlhosting.net/).

## Tunelização
Túneis são casos especiais, pois requerem que você transmita os dados através de um servidor dedicado por sua parte para o servidor deles e então outras pessoas podem acessar através destes tuneis. É bem útil caso queira mostrar para um cliente como está o desenvolvimento sem precisar configurar muita coisa, já que vai rodar direto da sua máquina.

### Ngrok

![ngrok](https://ngrok.com/static/img/ngrok-black.svg "ngrok")

[Pode ser acessado aqui](https://ngrok.com/).

### StaqLab

![StaqLab](https://tunnel.staqlab.com/theme/img/basic/logo.png "StaqLab")

[Pode ser acessado aqui](https://tunnel.staqlab.com/)