---
layout: post
title: Criando um WebScrapper com Python
category: Desenvolvimento
tags:
  - tutorial
  - webscrapper
  - python
date: 2021-11-10T17:17:26.391Z
post_date: 2021-11-10T17:17:26.411Z
isBanner: false
special: false
active: true
---
Neste tutorial vamos criar um webscrapper usando Python, usando as libs BeautifulSoup4 e requests. E no fim do tutorial vamos salvar essas informações em um banco de dados mongodb e em um arquivo do tipo JSON.

## Sumário

1. [Criando o Repositório](#criando-o-reposit%C3%B3rio)
2. [Instalando Dependências](#instalando-dependencias)
3. [Baixando a Página](#baixando-a-pagina)
4. [Navegando pelas Páginas](#navegando-pelas-paginas)
5. [Salvando os Dados](#salvando-os-dados)
6. [Enviando os Dados para o Banco](#enviando-os-dados-para-o-banco)
7. [Disposições Finais](disposiçoes-finais)

## Criando o Repositório

Para iniciar, vamos criar nosso repositório. Para este simples projetos vamos precisar apenas de dois arquivos, **requirements.txt** onde iremos colocar as dependencias para facilitar a instalações posteriores *(útil para conteinerização),* e o arquivo com o código do scrapper, podemos chamar de **main.py**. Logo se em ambiente linux podemos lançar o seguinte comando no terminal:

```shell
mkdir scrapper && touch scrapper/requirements.txt && touch scrapper/main.py
```

E abrir no seu editor de preferencia, como estou usando o vscode, apenas o comando `code scrapper` basta. Caso não esteja em ambiente linux, basta criar os arquivos manualmente.

## Instalando Dependências

Vamos adcionar a nossa lista de dependencia o **BeautifulSoup4** e **Requests** acrescentando elas no nosso arquivo requirements.txt, logo este arquivo ficará como a seguir.

```python
requests
beautifulsoup4
```

Em seguida para instalar essas dependencias basta dar o comando `pip install -r requirements.txt`, note que estamos usando o [pip](https://pypi.org/) para gerenciar nossas dependencias, se não tiver o pip instalado recomendo que o [instale](https://pip.pypa.io/en/stable/installation/).

Com isso todas as dependências que precisamos até então estão supridas.

## Baixando a Página

Vamos pro nosso código em `main.py` e vamos começar a pegar os dados da página da seguinte forma:

*Como exemplo, minha página alvo é a página com o significado de amor, e meu objetivo é capturar os significados dessa palavra, exemplos e frases com essa palavra que estão na página.*

```python
# Importando as dependências necessárias.
import requests
from bs4 import BeautifulSoup

# Definindo nossa url alvo.
url = "https://www.dicio.com.br/amor/"

# Baixando a página
page = requests.get(url)

# Formatando a página com BeautifulSoup4
beautiful_page = BeautifulSoup(page.text, 'html.parser')
```

Com isso já podemos navegar sobre a página.

Abra a página com seu navegador e inspecione a, procurando seus atributos, no caso do significado podemos selecionar todos os elementos do tipo spans que possuam o atributo itemprop="description".

![Procurando o elemento.](/images/uploads/screenshot-from-2021-11-10-15-13-00.png "Procurando o elemento.")

Para selecionar estes elementos vamos fazer da seguinte forma:

```python
# Importando as dependências necessárias.
import requests
from bs4 import BeautifulSoup

# Definindo nossa url alvo.
url = "https://www.dicio.com.br/vida/"

# Baixando a página
page = requests.get(url)

# Formatando a página com BeautifulSoup4
beautiful_page = BeautifulSoup(page.text, 'html.parser')

# Capturando o elemento que possue a definição da palavra.
definition = beautiful_page.find(attrs={'itemprop': 'description'})
```

Se rodarmos esse código printando a definition devemos ter o seguinte resultado:

![Elemento capturado.](/images/uploads/screenshot-from-2021-11-10-15-14-00.png "Elemento capturado.")

O que é o que precisamos, mas para ficar melhor vamos todas as definições em um vetor, com uma definição para cada índice. Para isso podemos iterar sobre todos os spans que existem nesse elemento e inserir cada um em um vetor, da seguinte forma:

```python
# Importando as dependências necessárias.
import requests
from bs4 import BeautifulSoup

# Definindo nossa url alvo.
url = "https://www.dicio.com.br/vida/"

# Baixando a página
page = requests.get(url)

# Formatando a página com BeautifulSoup4
beautiful_page = BeautifulSoup(page.text, 'html.parser')

# Capturando o elemento que possue a definição da palavra.
definition = beautiful_page.find(attrs={'itemprop': 'description'})

str_definition = []

# Iterando sobre todos os elementos do tipo span encontrados.
for definition_i in definition.find_all('span'):
    try:
        element_class = definition_i['class'][0]
    except:
        element_class = ""
    
    # Evitando os elementos que possuem a classe tag, para evitar repetições.
    if element_class != 'tag':
        str_definition.append(definition_i.get_text().strip())

```

Se rodarmos nosso código agora vamos ter o seguinte resultado:

![Resultado de definicao.](/images/uploads/screenshot-from-2021-11-10-15-20-11.png "Resultado de definicao.")

É exatamente o que resultado que estávamos esperando, com isso podemos apenas repetir o processo para os elementos com os exemplos.

```python
# Importando as dependências necessárias.
import requests
from bs4 import BeautifulSoup

# Definindo nossa url alvo.
url = "https://www.dicio.com.br/vida/"

# Baixando a página
page = requests.get(url)

# Formatando a página com BeautifulSoup4
beautiful_page = BeautifulSoup(page.text, 'html.parser')

# Capturando o elemento que possue a definição da palavra.
definition = beautiful_page.find(attrs={'itemprop': 'description'})

str_definition = []

# Iterando sobre todos os elementos do tipo span encontrados.
for definition_i in definition.find_all('span'):
    try:
        element_class = definition_i['class'][0]
    except:
        element_class = ""
    
    # Evitando os elementos que possuem a classe tag, para evitar repetições.
    if element_class != 'tag':
        str_definition.append(definition_i.get_text().strip())

# Nem sempre vamos ter disponível exemplos para todas as frases. Logo vamos usar um bloco try catch.
try:
    # Buscar o elemento H3 com a classe 'tit-exemplo', onde os exemplos estarão na sua div pai. por isso o uso do .parent
    example = beautiful_page.find(attrs={'class': 'tit-exemplo'}).parent.find_all(attrs={'class': 'frase'})
    
    str_example = []

    # Iterar sobre os exemplos.
    for example_i in example:
        str_example.append(example_i.get_text().strip())
except:
    example = "",
    str_example = [],

## Valor com o link da fonte das informações.
source = url
```

\## Salvando os Dados

Agora vamos formatar estes dados em um objeto para facilitar a manipulação. E então salvar em um arquivo tipo json.

```python
# Importando as dependências necessárias.
import requests
from bs4 import BeautifulSoup

# Definindo nossa url alvo.
url = "https://www.dicio.com.br/vida/"

# Baixando a página
page = requests.get(url)

# Formatando a página com BeautifulSoup4
beautiful_page = BeautifulSoup(page.text, 'html.parser')

# Capturando o elemento que possue a definição da palavra.
definition = beautiful_page.find(attrs={'itemprop': 'description'})

str_definition = []

# Iterando sobre todos os elementos do tipo span encontrados.
for definition_i in definition.find_all('span'):
    try:
        element_class = definition_i['class'][0]
    except:
        element_class = ""
    
    # Evitando os elementos que possuem a classe tag, para evitar repetições.
    if element_class != 'tag':
        str_definition.append(definition_i.get_text().strip())

# Nem sempre vamos ter disponível exemplos para todas as frases. Logo vamos usar um bloco try catch.
try:
    # Buscar o elemento H3 com a classe 'tit-exemplo', onde os exemplos estarão na sua div pai. por isso o uso do .parent
    example = beautiful_page.find(attrs={'class': 'tit-exemplo'}).parent.find_all(attrs={'class': 'frase'})
    
    str_example = []

    # Iterar sobre os exemplos.
    for example_i in example:
        str_example.append(example_i.get_text().strip())
except:
    example = "",
    str_example = [],

## Valor com o link da fonte das informações.
source = url

# Criando um objeto com todas as informações.
resolve = {
    "word": "amor",
    "definition": str_definition,
    "source": source,
    "example": str_example,
    "html": {
        "definition": str(definition),
        "example": str(example),
    }
}

# Escrevendo em um objeto tipo json guardando o nosso objeto.
f = open("significado_de_amor.json", "a")

f.write(str(resolve).replace('"', "`").replace("'", '"').replace("`", "'"))

f.write(',\n')
```

Se rodarmos o nosso código agora, ele irá criar um arquivo chamado "significado_de_amor.json" com o nosso objeto salvo.

```json
{
    "word": "amor",
    "definition": [
        "substantivo feminino",
        "Conjunto dos hábitos e costumes de alguém; maneira de viver: tinha uma vida de milionário.",
        "Reunião daquilo que diferencia um corpo vivo do morto: encontrou o acidentado sem vida; a planta amanheceu sem vida.",
        "O que define um organismo do seu nascimento até a morte: a vida dos animais.",
        "[Por Extensão] Tempo que um ser existe, entre o seu nascimento e a sua morte; existência: já tinha alguns anos de vida.",
        "[Por Extensão] Fase específica dentro dessa existência: vida adulta.",
        "[Figurado] Tempo de duração de alguma coisa: a vida de um carro.",
        "[Por Extensão] Reunião dos seres caracterizados tendo em conta sua espécie, ambiente, época: vida terrestre; vida marítima.",
        "[Figurado] Aquilo que dá vigor ou sentido à existência de alguém; espírito: a música é minha vida!",
        "Reunião dos fatos e acontecimentos mais relevantes na existência de alguém; biografia: descrevia a vida do cantor.",
        "O que uma pessoa faz para sobreviver: precisava trabalhar para ganhar a vida.",
        "[Figurado] O que se realiza; prática: vida rural.",
        "Etimologia (origem da palavra vida). Do latim vita.ae."
    ],
    "source": "https://www.dicio.com.br/vida/",
    "example": [
        "No início de 2009, os departamentos foram cenários de prolongados e inéditos protestos de caráter social, com o registro de alguns episódios de violência, por causa do aumento do custo de vida. Folha de S.Paulo, 26/06/2009",
        "O ex-presidente vinha mantendo uma vida discreta desde que passou o poder a Barack Obama, em janeiro. Folha de S.Paulo, 25/10/2009",
        "O teclado é iluminado, o que facilita a vida de quem precisa usar o computador em ambientes escuros. Folha de S.Paulo, 15/07/2009"
    ],
    "html": {
        "definition": "<p class='significado textonovo' itemprop='description'><span class='cl'>substantivo feminino</span> <span>Conjunto dos hábitos e costumes de alguém; maneira de viver: tinha uma vida de milionário.</span><br/><span>Reunião daquilo que diferencia um corpo vivo do morto: encontrou o acidentado sem vida; a planta amanheceu sem vida.</span><br/><span>O que define um organismo do seu nascimento até a morte: a vida dos animais.</span><br/><span><span class='tag'>[Por Extensão]</span> Tempo que um ser existe, entre o seu nascimento e a sua morte; existência: já tinha alguns anos de vida.</span><br/><span><span class='tag'>[Por Extensão]</span> Fase específica dentro dessa existência: vida adulta.</span><br/><span><span class='tag'>[Figurado]</span> Tempo de duração de alguma coisa: a vida de um carro.</span><br/><span><span class='tag'>[Por Extensão]</span> Reunião dos seres caracterizados tendo em conta sua espécie, ambiente, época: vida terrestre; vida marítima.</span><br/><span><span class='tag'>[Figurado]</span> Aquilo que dá vigor ou sentido à existência de alguém; espírito: a música é minha vida!</span><br/><span>Reunião dos fatos e acontecimentos mais relevantes na existência de alguém; biografia: descrevia a vida do cantor.</span><br/><span>O que uma pessoa faz para sobreviver: precisava trabalhar para ganhar a vida.</span><br/><span><span class='tag'>[Figurado]</span> O que se realiza; prática: vida rural.</span><br/><span class='etim'>Etimologia (origem da palavra <i>vida</i>). Do latim vita.ae.</span></p>",
        "example": "[<div class='frase'>\n                            No início de 2009, os departamentos foram cenários de prolongados e inéditos protestos de caráter social, com o registro de alguns episódios de violência, por causa do aumento do custo de <strong>vida</strong>. <em>Folha de S.Paulo, 26/06/2009</em> </div>, <div class='frase'>\n                            O ex-presidente vinha mantendo uma <strong>vida</strong> discreta desde que passou o poder a Barack Obama, em janeiro. <em>Folha de S.Paulo, 25/10/2009</em> </div>, <div class='frase'>\n                            O teclado é iluminado, o que facilita a <strong>vida</strong> de quem precisa usar o computador em ambientes escuros. <em>Folha de S.Paulo, 15/07/2009</em> </div>]"
    }
},
```