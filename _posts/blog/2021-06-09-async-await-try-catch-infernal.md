---
layout: post
title: Async/Await try-catch Infernal
category: extra-bits
tags:
  - tutorial
date: 2021-07-07T13:36:10.983Z
post_date: 2021-07-07T13:36:11.015Z
cover: /images/uploads/pexels-photo-2557709.jpeg
isBanner: false
special: false
active: true
---
Async/Await parece ótimo porque evita o inferno do calback ou a pirâmide do terror por escrever um código assíncrono linha por linha de forma limpa.

Neste post vou demonstrar através de exemplos o que é este inferno de callback, e algumas formas de tratar erros em métodos assíncronos.

> Exemplo do callback hell

```javascript
function hell(){
	step1((a) => {
		step2((b) => {
			step3((c) => {
				//Bem Vindo
			})
		})
	})
}
```

> Exemplo de código assíncrono.

```javascript
function heaven(){
	const a = await step1();
	const b = await step2();
	const c = await step3();
	return a + b + c;
}
```

Isto é... Até tivermos que lidar com tratamento de erros... Porque você pode acabar caindo na torre to terror do try catch, transformando seu código simples e limpo de linhas únicas em no mínimo mais 6 linhas de código.

> Exemplo da torre do terror (tower of terror)

```javascript
async function towerOfTerror(){
	let a;
	let b;
	let c;
	
	try{
		a = await step1();
	}catch (error) {
		handle(error)
	}
	
	try{
		b = await step2();
	}catch (error) {
		handle(error)
	}
	try{
		c = await step3();
	}catch (error) {
		handle(error)
	}
	
	return a + b + c;
}
```

Nesses casos, a solução mais simples é simplesmente usar o catch no final de cada promise criada.

```javascript
	await step1().catch(fun);
```

Algo como:

```javascript
function gettingBetter(){
	const a = await step1().catch(err => { handle(err) });
	const b = await step2().catch(err => { handle(err) });
	const c = await step3().catch(err => { handle(err) });
	return a + b + c;
}
```

O que até que fica melhor porém ainda é repetitivo, uma outra opção é criar uma funcão onde exista apenas um bloco try catch para substituir todas as outras, como a seguir:

```javascript
async function awessome(){
	try{
		const data = await promise;		
		return [data, null];
	} catch (error) {
		console.error(error);
		return [null, error];
	}
}
```

Assim quando a promessa for resolvida, ela devolverá um array com sua resposta e nulo se não houver erros, e se conter erros retornará um array com o primeiro índice nulo e o erro, assim podemos manter o código limpo linha por linha usando desestruturação e usar um if caso queira fazer outra coisa com o erro.

```javascript
async function main(){
	const [ data, error ] = await awessome();
	
	if(error) { }
	
	const [ data2, error2 ] = await awessome();
	const [ data3, error3 ] = await awessome();
	return a + b + c;
}
```

Referência[: Fireship](https://www.youtube.com/watch?v=ITogH7lJTyE)