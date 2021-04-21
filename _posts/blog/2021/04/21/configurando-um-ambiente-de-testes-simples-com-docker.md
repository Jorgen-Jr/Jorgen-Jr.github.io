---
layout: post
title: Configurando Um Ambiente de Testes Simples com Docker
desenvolvimento: Desenvolvimento
tags:
  - Desenvolvimento
  - Containers
  - Docker
  - ""
date: 2021-04-21T15:20:10.313Z
post_date: 2021-04-21T15:20:11.271Z
cover: /images/uploads/pexels-pixabay-326410.jpg
isBanner: false
special: false
active: true
---


> Usando distros baseadas no Debian/Ubuntu (No meu caso, ElementaryOS)

## Instalando o Docker

### Usando o Repositório Official do Docker

Para configurar o repositório, você precisa atualizar o `apt` e instalar os seguintes pacotes: <break>

```shell
$ sudo apt-get update
```

```shell
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

![Passo - 01](https://raw.githubusercontent.com/Jorgen-Jr/tutorial_docker_compose/master/screenshots/01.png)

E em seguida adcionar a chave GPG official do Docker.

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

![Passo - 02](https://raw.githubusercontent.com/Jorgen-Jr/tutorial_docker_compose/master/screenshots/02.png)

Você pode verificar se a chave foi adcionada pelo fingerprint `9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88`, buscando pelos últimos 8 characteres. O resultado deve ser como a seguir:

```shell
sudo apt-key fingerprint 0EBFCD88

pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]
```

![Passo - 03](https://raw.githubusercontent.com/Jorgen-Jr/tutorial_docker_compose/master/screenshots/03.png)

Agora podemos adcionar o repositório dos lançamentos estáveis do Docker Engine. Através do comando:

```shell
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

> Note que no caso do ElementaryOS eu precisei trocar a subfunção `$(lsb_release-cs)` que retorna a sua distribuição linux para `bionic`.

![Passo - 04](https://raw.githubusercontent.com/Jorgen-Jr/tutorial_docker_compose/master/screenshots/04.png)

Com o repositório instalado, atualize seu apt-get através do comando `sudo apt-get update` e instale o Docker Engine através do comando `sudo apt-get install docker-ce docker-ce-cli containerd.io`

![Passo - 05](https://raw.githubusercontent.com/Jorgen-Jr/tutorial_docker_compose/master/screenshots/05.png)

Você pode verificar que o docker está instalado através do comando `docker -vv`.

![Passo - 06](https://raw.githubusercontent.com/Jorgen-Jr/tutorial_docker_compose/master/screenshots/06.png)

Ou executando o comando `docker run hello-world` que deve baixar a imagem de teste e quando executa-la mostrar a seguinte mensagem.

![Passo - 07](https://raw.githubusercontent.com/Jorgen-Jr/tutorial_docker_compose/master/screenshots/07.png)

### Compose

Instale agora o docker compose através dos comandos:

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

para baixar o docker-compose e

```shell
sudo chmod +x /usr/local/bin/docker-compose
```

para torna-lo executável.
![Passo - 08](https://github.com/Jorgen-Jr/homolog_docker_config/blob/master/screenshots/09.png)

## Configurando o Ambiente através do YAML

O docker-compose permite o uso de scripts yaml, onde ditaremos as imagens e as propriedades de que ela deve rodar.<break>
Irei criar uma pasta chamada `ambiente_de_testes` e dentro dela irei criar um arquivo `docker-compose.yml` para criarmos nosso ambiente.<break>
Nosso ambiente irá usar NodeJs, Postgres e Nginx, então de inicio podemos adcionar ao arquivo as seguintes propriedades.

```python
version: '3.4'
services:
  postgres:
    image: postgres
    container_name: srv_postgres
    ports:
      - '5432:5432'
  nginx:
    image: nginx
    container_name: srv_nginx
    ports:
      - '81:80'
  node:
    image: 'node:slim'
    container_name: srv_node
    depends_on:
      - postgres
```

Definimos até então, quais serviços serão executados ao executar o comando do docker compose, em quais portas (com exceção do nodejs) e qual será o nome dos nossos containers. Mas podemos ir além, vamos definir agora os seus volumes, suas variáveis de ambiente e o comando para iniciar o servidor nodejs.

> Definir volumes é útil para poder armazenar os arquivos que a imagem irá usar, assim toda vez que o container precisar ser recriado estas informações não serão perdidas. 
> Para definir o volume iremos usar no escopo da imagem `volumes: {endereço do volume}` onde será dividido em `{Diretório do volume}` + `{nome do volume}` + `{diretório do volume que deseja salvar}` e os nomes dos volumes devem ser definidos como a seguir.

```python
version: '3.4'
services:
  postgres:
    image: postgres
    container_name: srv_postgres
    volumes:
      - '/home/jorge-n/ambiente_de_testes/var/lib/postgres:/var/lib/postgresql/'
    ports:
      - '5432:5432'
    environment:
      - POSTGRES_DB= {database padrão de seu banco de dados}
      - POSTGRES_PASSWORD= {Senha do usuário do banco de dados}
      - POSTGRES_USER= {usuário a ser criado no banco ao inicia-lo}
      - PGPORT=5432
  nginx:
    image: nginx
    container_name: srv_nginx
    volumes:
      - '/home/jorge-n/ambiente_de_testes/nginx/www:/usr/share/nginx/html/'
    ports:
      - '81:80'
    environment:
      - NGINX_HOST={dominio onde irá rodar o servidor web}
      - NGINX_PORT=80
  node:
    image: 'node:slim'
    container_name: srv_node
    depends_on:
      - postgres
    volumes:
      - '/home/jorge-n/ambiente_de_testes/backend/node:/home/node/app'
    ports:
      - '34012:3001'
    working_dir: /home/node/app
    environment:
      - NODE_ENV=homolog
      - PORT=3001
      - SECRET_SESSION={Segredo da sessão (usado em autenticação)}
      - DB_URI=postgres {endereço do banco de dados, aqui pode ser o nome do serviço}
      - DB_USER={Usuário do banco que a aplicação irá usar}
      - DB_PASSWORD={Senha do banco de dados}
      - DB_DATABASE= {Database da aplicação}
    expose:
      - '34012'
    command: bash -c "npm install && node src/server.js" {Comando que será executado ao iniciar o servidor de aplicação}
volumes:
  postgres: {}
  www: {}
  node: {}
```

Meu arquivo final ficou assim, mas você pode altera-lo conforme sua necessidade.
![Passo - 08](https://github.com/Jorgen-Jr/homolog_docker_config/blob/master/screenshots/08.png)

### Iniciando o ambiente de testes com Docker Compose.

Para iniciar o ambiente de testes, basta ir até a pasta onde está o arquivo `docker-compose.yml` e executar o comando `sudo docker-compose up` ele irá baixar as imagens dos containers necessárias e iniciar os serviços criando as pastas aonde definimos.
![Passo - 09](https://github.com/Jorgen-Jr/homolog_docker_config/blob/master/screenshots/10.png)
![Passo - 10](https://github.com/Jorgen-Jr/homolog_docker_config/blob/master/screenshots/11.png)

Agora basta copiar o código da nossa aplicação para as pastas criadas e reiniciar nosso ambiente rodando ele no fundo usando o comando `sudo docker-compose up -d`.
![Passo - 11](https://github.com/Jorgen-Jr/homolog_docker_config/blob/master/screenshots/12.png)

E voilla, tá pronto o sorvetinho. já podemos acessar a aplicação localmente.

## Dockstation

Se você preferir usar uma interface para gerenciar seus containers, recomendo usar o [Dockstation](https://dockstation.io/).

### Importando

Como já possuimos um arquivo docker-composee.yml basta criar um novo projeto no Dockstation usando ele.
![Passo - 12](https://github.com/Jorgen-Jr/homolog_docker_config/blob/master/screenshots/13.png)
![Passo - 13](https://github.com/Jorgen-Jr/homolog_docker_config/blob/master/screenshots/14.png)
![Passo - 13](https://github.com/Jorgen-Jr/homolog_docker_config/blob/master/screenshots/15.png)
O Dockstation facilita o gerenciamento, te dando acesso aos logs, propriedades e várias informações sobre o projeto e os containers, alem de dispor um editor para modificar o código do compose.

> Note que você vai precisar remover os container criados anteriormente para poder usar os nomes usados em `container_name` no nosso arquivo compose.

## Extra Bits

### React-Router Método 1

Uma configuração adcional é necessária para usar o react-router do reactjs no nginx. Para fazer isso através do docker, vamos entrar no container através do terminal usando o seguinte comando.

```shell
$ sudo docker exec -it srv_nginx /bin/bash
```

![Passo - 14](https://github.com/Jorgen-Jr/homolog_docker_config/blob/master/screenshots/16.png)
Em seguida instale um editor de sua preferencia, eu usarei o nano.
O arquivo que vamos modificar é o `default.conf` localizado em `/etc/nginx/config.d/default.conf` então irei usar o comando `nano /etc/nginx/conf.d/default.conf` para edita-lo.
Adcione `try_files $uri $uri/ /index.html;` dentro do escopo `location / {` como a seguir:
![Passo - 15](https://github.com/Jorgen-Jr/homolog_docker_config/blob/master/screenshots/17.png)
Salve o arquivo e saia do container e o reinicie com `sudo docker container restart srv_nginx`. Isso deve resolver os problemas com react-router onde acabamos com uma página 404.

### React-Router Método 2

Alternativamente, você pode salvar o arquivo conf em uma pasta separada no nosso projeto adcionando aos volumes do nginx a seguinte linha.

```python
    - './nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf'
```

Assim poderá editar o arquivo direto na pasta do projeto adcionando a linha `try_files $uri $uri/ /index.html;` dentro do escopo `location / {` como mostrado no método 1:

### Erro 403 Nginx

Este erro usualmente é causado por falta de permissão aos arquivos na pasta que definimos. para resolver isso, vá até a pasta do projeto e execute o comando `sudo chmod 777 -R ./` para dar permissão de leitura, escrita e execução para todos o proprietário, grupo e todos os outros usuários.