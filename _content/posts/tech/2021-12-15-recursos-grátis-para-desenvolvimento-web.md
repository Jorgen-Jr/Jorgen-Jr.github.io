---
layout: post
title: Recursos Grátis para Desenvolvimento Web
category: Extra Bits
domain: tech
tags:
    - tips
    - free
    - resources
    - web_development
date: 2021-12-23T15:32:53.882Z
post_date: 2021-12-23T15:32:55.137Z
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
    2. [Render](#Render)
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

[Acesse Aqui](https://netlify.com/)

### Github Pages

![Octocat - Github](/images/uploads/octocat.png "Octocat - Github")

Githuh pages funciona muito bem para seus projetos do github, se integra super bem com o github actions para automatizar a build caso necessário [como exemplificado aqui](https://jorgen-jr.github.io/blog/2021-08-10-deploy-autom%C3%A1tico-de-websites-react-para-o-github-pages/), seu dominio sera atrelado aos subdominios do github, cujo será `nome_de_usuário.github.io/repositório` ou, se seu repositório tiver o nome `nome_de_usuario.github.io` este será seu dominio.

Você pode ler mais sobre isso [aqui](https://docs.github.com/en/pages).

## Back-end

### Heroku

![Heroku Logo](/images/uploads/heroku_logo.svg.png "Heroku Logo")

Heroku é uma uma plataforma que lida com aplicações como contêiners que eles chamam de dynos, que podem ser escalados de forma facilitada, seu serviço gratuíto permite que crie até 5 dynos, suportando várias linguagens de programação e frameworks, integração de desenvolvimento contínuo, e pipelines que facilitam a implementação de instâncias para homologação por exemplo.

[Acesse Aqui](https://heroku.com/)

### Render

![Render.com](data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwLjE3OCIgdmlld0JveD0iMCAwIDc3Ljc4OCAyMC4xNzgiIHdpZHRoPSI3Ny43ODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzIzMmE1NSI+PHBhdGggZD0ibTM5OS43ODEgMjIyLjQzN2E3LjM0IDcuMzQgMCAwIDAgLTMuNjE4Ljk1MXYxMC41NTdhLjU0OC41NDggMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ4LjU0OCAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzZhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg1YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi4xODggNi4xODggMCAwIDEgMy43Ni0xLjI2My41MzMuNTMzIDAgMCAxIC41MjUuNTI1djEuODg3YS41NTUuNTU1IDAgMCAxIC0uNTQuNTI2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Mi43IC0yMTQuNTM0KSIvPjxwYXRoIGQ9Im00NjcuMzMzIDIyOC4zaC04LjU1NnYuMDg1YzAgMS41MTguNjI0IDMuMzM1IDMuMTUgMy4zMzUgMS42MTgtLjAxNCAzLjIyMS0uMSA0LjgyNS0uMjdoLjA4NWMuMjcgMCAuNDY4LjEyOC40NjguNHYxLjczMWMwIC40MjYtLjA4NS42MS0uNTUzLjY4MWEyMy41MTkgMjMuNTE5IDAgMCAxIC01LjA5NC40NGMtMi42MjUgMC02LjM1Ny0xLjQxOS02LjM1Ny02LjU4NHYtMS45NDRjMC00LjEgMi4yODUtNi42NjkgNi4zLTYuNjY5IDQuMDQ0IDAgNi4yNDQgMi43NTMgNi4yNDQgNi42Njl2MS40NzZjLjAxMy40MjEtLjE0NS42NS0uNTEyLjY1em0tMi45NjYtMi41NjhjMC0yLjA0My0xLjEzNS0zLjIzNS0yLjc1My0zLjIzNXMtMi44MSAxLjE0OS0yLjgxIDMuMjM1di4xaDUuNTYyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ0Ni40MTcgLTIxNC41MzQpIi8+PHBhdGggZD0ibTU3Ni4yOTMgMjM0LjU3aC0yLjQxMmEuNTQ4LjU0OCAwIDAgMSAtLjUyNS0uNTUzdi04LjU0MmMwLTIuMjg1LS4yMTMtMi45MzctMi4yMjgtMi45MzdhNi42NDggNi42NDggMCAwIDAgLTIuOTY2Ljk1MXYxMC41NTdhLjU0OS41NDkgMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ5LjU0OSAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzdhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg1YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi44NTIgNi44NTIgMCAwIDEgNC4yNTctMS4yNjNjMy43NzQgMCA0LjU0MSAyLjU0IDQuNTQxIDUuODc1djguNTU2YS41NjkuNTY5IDAgMCAxIC0uNTQuNTR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQwLjI5NCAtMjE0LjYxOSkiLz48cGF0aCBkPSJtNjgyLjA1IDIwNGEyMi4xNiAyMi4xNiAwIDAgMSAtNS4yNzkuNjgxYy00LjIyOCAwLTYuMjcyLTIuNS02LjI3Mi02LjU4NHYtMi4wMjljMC00LjEgMi4wNDMtNi41ODQgNi4yNzItNi41ODRhMjEuMzcxIDIxLjM3MSAwIDAgMSAyLjUyNi4xODR2LTQuNjRhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuNDEyYS41MzMuNTMzIDAgMCAxIC41MjUuNTI1djE4LjI3MmMuMDAxLjM3LS4xMTMuNTQxLS43MDkuN3ptLTIuNzUtMTEuNTExYTIxLjM4NSAyMS4zODUgMCAwIDAgLTIuNTI2LS4xODRjLTIuMjU2IDAtMi44MDkgMS42LTIuODA5IDMuNzZ2Mi4wMTVjMCAyLjE1Ny41NTMgMy43NiAyLjgwOSAzLjc2YTE2LjY3NiAxNi42NzYgMCAwIDAgMi41MjYtLjE4NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MzEuMDgxIC0xODQuNSkiLz48cGF0aCBkPSJtNzg5LjczMyAyMjguM2gtOC41NTZ2LjA4NWMwIDEuNTE4LjYyNCAzLjMzNSAzLjE1IDMuMzM1IDEuNjE4LS4wMTQgMy4yMjEtLjEgNC44MjUtLjI3aC4wODVjLjI1NSAwIC40NjguMTI4LjQ2OC40djEuNzMxYzAgLjQyNi0uMDg1LjYxLS41NTMuNjgxYTIzLjUxOSAyMy41MTkgMCAwIDEgLTUuMDk0LjQ0Yy0yLjYyNSAwLTYuMzU3LTEuNDE5LTYuMzU3LTYuNTg0di0xLjk0NGMwLTQuMSAyLjI4NS02LjY2OSA2LjMtNi42NjkgNC4wNDQgMCA2LjI0NCAyLjc1MyA2LjI0NCA2LjY2OXYxLjQ3NmMuMDEzLjQyMS0uMTQ1LjY1LS41MTIuNjV6bS0yLjk2Ni0yLjU2OGMwLTIuMDQzLTEuMTM1LTMuMjM1LTIuNzUzLTMuMjM1cy0yLjgxIDEuMTQ5LTIuODEgMy4yMzV2LjFoNS41NjJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzIzLjA3IC0yMTQuNTM0KSIvPjxwYXRoIGQ9Im04OTQuMjgxIDIyMi40MzdhNy4zMzkgNy4zMzkgMCAwIDAgLTMuNjE4Ljk1MXYxMC41NTdhLjU0OC41NDggMCAwIDEgLS41MjUuNTUzaC0yLjQxMmEuNTQ5LjU0OSAwIDAgMSAtLjUyNS0uNTUzdi0xMy43MzZhLjUzMy41MzMgMCAwIDEgLjUyNS0uNTI1aDIuMjg0YS41MzMuNTMzIDAgMCAxIC41MjUuNTI1di41NTNhNi4xODggNi4xODggMCAwIDEgMy43Ni0xLjI2My41MzMuNTMzIDAgMCAxIC41MjUuNTI1djEuODg3YS41NDYuNTQ2IDAgMCAxIC0uNTM5LjUyNnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MTcuMDMyIC0yMTQuNTM0KSIvPjwvZz48L3N2Zz4K "Render.com")

Render é uma solução em núvem para aplicações web, seja backend ou frontend, banco de dados postgres, cronjobs, workers... Porém, suas contas grátis funcionam por 90 dias apenas para banco de dados e webservices. [Você pode ler mais sobre isso aqui](https://render.com/docs/free) e suas instâncias dormem depois de um tempo de inatividade, muito parecido com o heroku nesses quesitos.

[Acesse Aqui](https://render.com/)

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

![AtlasDB](/images/uploads/mongodb.png "AtlasDB")

Banco de dados do tipo MongoDB, orientado a documentos (NoSQL), de ate 512 megas gratuítos, [já escrevi sobre esse banco em outro post](https://jorgen-jr.github.io/blog/2021-11-10-criando-um-webscrapper-com-python/).

[Pode ser acessado aqui](https://www.mongodb.com/).

### Firebase

![Firebase Logo](/images/uploads/640px-firebase_logo.png "Firebase Logo")

Firebase é a solução do google para banco de dados em tempo real, de fácil integração com outros produtos da google, possui um banco de dados orientado a documentos `Firestore` com escalonamento automático, também possui soluções de cloud functions, storage e outros.

### FreeMySQLHosting

Banco de Dados relacional usando MySQL, com até 5 megas gratuítos, não usei muito, mas é bom ter uma opção MySQL para alguns casos.

[Pode ser acessado aqui](https://www.freemysqlhosting.net/).

## Tunelização

Túneis são casos especiais, pois requerem que você transmita os dados através de um servidor dedicado por sua parte para o servidor deles e então outras pessoas podem acessar através destes tuneis. É bem útil caso queira mostrar para um cliente como está o desenvolvimento sem precisar configurar muita coisa, já que vai rodar direto da sua máquina.

### Ngrok

![ngrok](/images/uploads/ngrok-black.png "ngrok")

[Pode ser acessado aqui](https://ngrok.com/).

### StaqLab

![StaqLab](https://tunnel.staqlab.com/theme/img/basic/logo.png "StaqLab")

[Pode ser acessado aqui](https://tunnel.staqlab.com/)
