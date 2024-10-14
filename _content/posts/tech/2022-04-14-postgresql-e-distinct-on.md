---
layout: post
title: PostgreSQL e Distinct On
category: sql
domain: tech
tags:
    - tutorial
    - extra-bits
date: 2022-04-14T14:59:58.767Z
post_date: 2022-04-14T14:59:59.654Z
cover: /images/uploads/searching.jpg
isBanner: false
special: false
active: true
---

Vamos dar uma olhada na cláusula `distinct on` do postgreSQL, e um de seus casos de uso, `distinct on` é usado juntamente com o `select` para remover duplicatas de uma consulta da mesma forma que um `distinct` comum, com a única diferença de que ele mantém a `primeira linha` de cada linha de duplicatas no resultado.

# [PosgreSQL DISTINCT ON](https://www.postgresql.org/docs/current/sql-select.html#SQL-DISTINCT)

Se **SELECT DISTINCT** estiver especificado, todas as linhas duplicatas serão removidas do resultado (uma linha é mantida de cada grupo de duplicatas). **SELECT ALL** especifica o oposto, todas as linhas do resultado são mantidas; este é o padrão.

**SELECT DISTINCT ON** ( expression \[, ...] ) mantém apenas a primeira linha de cada conjunto de linhas cujo a expressão seja avaliada como igual. A expressão **DISTINCT ON** são interpretadas pela mesmas regras do **[ORDER BY](https://www.postgresql.org/docs/current/sql-select.html#SQL-ORDERBY)**. Note que a “primeira linha” de cada conjunto é imprevisível a menos que o **ORDER BY** seja usado para garantir que a linha desejada apareça primeiro.

Vamos considerar a seguinte tabela para armazenar dados de musicas:

```sql
 CREATE TABLE song(
    id serial NOT NULL PRIMARY KEY,
    name VARCHAR,
    singer VARCHAR,
    launch_date DATE
);
```

E os seguintes dados:

```sql
INSERT INTO song(name, singer, launch_date)
VALUES
    ('Forever Young', 'Alphaville', '1984-08-08'),
    ('Big in Japan', 'Alphaville', '1984-01-20'),
    ('Sounds Like a Melody', null, '1983-10-15'),
    ('Romeos', 'Alphaville', '1989-03-01'),
    (null, 'Alphaville', '1994-10-05'),
    ('Red is The New Black', null, '2001-05-05'),
    ('In da Club', '50 Cent', '2002-02-21'),
    ('Candy Shop', '50 Cent', '2005-02-15'),
    ('I Started a Joke', 'Bee Gees', '1968-03-23'),
    ('My Universe', 'Coldplay', '2021-10-27'),
    ('Holiday', 'Bee Gees', '1967-05-15'),
    ('Paradise', 'Coldplay', '2011-09-12'),
    ('The Scientist', 'Coldplay', '2002-08-26');
```

Agora, se quisermos retornar todas as músicas mais atuais de um cantor sem repetições,e podemos usar a seguinte consulta:

```sql
 SELECT DISTINCT ON (singer) singer, name, launch_date
   FROM song
   ORDER BY singer, launch_date DESC;
```

Retornando os seguintes dados

![Resultado Distinct On](/images/uploads/screenshot-from-2022-04-13-23-49-20.png "Resultado Distinct On")

Retorna a musica mais recente para cada cantor. Mas se não usarmos o **ORDER BY** para forçar a ordem dos valores de tempo para cada localização teriamos obtido um valor imprevisível para cada cantor.

As expressões **DISTINCT ON** precisam se equiparar com a expressão **ORDER BY** que estiver mais a esquerda (a primeira coluna a ser ordenada). A cláusula **ORDER BY** normalmente conterá expressões adicionais para determinar o precedente desejado de linhas em cada conjunto definido pelo **DISTINCT ON**.

Atualmente, **FOR NO KEY UPDATE, FOR UPDATE, FOR SHARE** e **FOR KEY SHARE** não podem ser especificados com **DISTINCT**.

Fontes:

-   [GeeksForGeeks](https://www.geeksforgeeks.org/postgresql-distinct-on-expression/)
-   [PostgreSQL Docs](https://www.postgresql.org/docs/current/sql-select.html#SQL-DISTINCT)
