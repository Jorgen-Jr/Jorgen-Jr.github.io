---
layout: post
title: Erro 404 com o React Router
category: Extra Bit
tags:
  - extrabit
date: 2021-07-07T16:02:38.321Z
post_date: 2021-07-07T16:01:57.336Z
cover: /images/uploads/pexels-photo-14303.webp
isBanner: false
special: false
active: true
---
A meses atrás criei um projeto usando o **create-react-app** e usei o **react-router** para lidar com as rotas da minha aplicação front-end, porém ao enviar minha build para o servidor, acabei sendo introduzido a um problema, quando o usuário entrava em uma rota e atualizar a página ou quando ele acessava através de um link externo ele retornava o erro 404, devido ao arquivo não ter sido encontrado no endereço requisitado, para resolver isso usei regras de redirecionamento no servidor. Espero que minha solução possa ajudar quem também passar por esse problema.

## Resolvendo no Apache e servidores com suporte ao arquivo .htaccess

Basta criar uma rota de redirecionamento, como exemplificado abaixo, primeiro crie um arquivo `.httaccess` na pasta public do seu projeto react.

[O arquivo exemplificado pode ser encontrado aqui.](https://gist.github.com/Jorgen-Jr/d4b19ad2d89b538e466c11a828fc36d8)

```xml
<IfModule mod_rewrite.c>

  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]

</IfModule>
```

## Resolvendo no NGINX com o arquivo de configuraçao nginx.conf

Acesse o arquivo de configuraço do seu nginx, normalmente localizado em /etc/nginx/conf.d/default.conf e adcione a linha `try_files $uri $uri/ /index.html;` como a seguir:

Observando que apenas a linha `try_files $uri $uri/ /index.html;` foi alterada do meu arquivo de configuração padrão.
[O mesmo pode ser encontrado aqui.](https://gist.github.com/Jorgen-Jr/d639b2d0e9e72189e13539689e89aa39)

```textile
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
	    try_files $uri $uri/ /index.html;
    }
```