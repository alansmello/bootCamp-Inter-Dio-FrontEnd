/*

//tipos primitivos
//boolean
var vOuF = false;
console.log(vOuF);

//number
var numero = 1;
console.log(numero);

//string
var nome = "Alan";
console.log(nome);

//function
var funcao =  function(){}
console.log(typeof(funcao));

//como declarar
var variavel;
variavel = "valor"
console.log(variavel);
variavel = "outroValor"
console.log(variavel);

//const não pode ser inicializada sem valor
const variavel2 = 'alan';
console.log(variavel2)

//obs: var (escopo global e local); let(escopo local, por convenção); const(escopo local).

var escopoGlobal = "global";

function escopoLocal(){
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

escopoLocal();
console.log(escopoGlobal);
//console.log(escopoLocalInterno)   -> dá erro.

//atribuição
var atribuicao = "AlanMello";
//comparação
var comparacao ='0'== 0;
//comparação idêntica
var identica ='0'=== 0;

console.log(atribuicao);
console.log(comparacao);
console.log(identica);

var array = ['string', 1, true, ['array', 3, false], 'dio', 2.56, 500];
console.log(array);

array.forEach(function(item, index){console.log(item, index)})

array.push('novo Item');
console.log(array)

array.pop();
console.log(array)

array.shift();
console.log(array)

array.unshift('novo item no inicio');
console.log(array)

console.log(array.indexOf(true));

array.splice(0,2);
console.log(array);

var novoArray = array.slice(0,2)
console.log(novoArray)

// objetos

var xicara = {
    cor:'azul',
    tamanho:'pequeno',
    marca: 'stanley',
    numero: 51,
    array: ['1,2,3'],
    objetoInterno: {cor:"azul"}
}
console.log(xicara)
console.log(xicara.tamanho)

var {cor, tamanho, numero} = xicara
console.log(cor)

// Estruturas Condicionais
var jogador1 = 0;
var jogador2 = 0;
var placar;

if(jogador1 > 0 && jogador2 ==0){
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
}else if(jogador2 > 0 && jogador1 ==0){
    console.log('jogador 2 marcou ponto')
    placar = jogador2 > jogador1;
}else{
    console.log('ninguém marcou ponto.')
    placar = jogador1 == jogador2;
}

//if ternário
jogador1 > 0 ? console.log('jogador 1 marcou ponto'):console.log('jogador 1 não marcou ponto');

//swich/case

switch(placar){
    case jogador1 > jogador2:
    console.log('jogador 1 ganhou!!!')
    break;
    case jogador2 > jogador1:
    console.log('jogador 2 ganhou');
    break
    case jogador1 == jogador2:
    console.log('O jogo empatou');
    break;
}

var teste = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

for(let indice = 0; indice < teste.length; indice++){
    console.log(`indice ${indice} = ${teste[indice]}`);
}

for (let i in teste){
    console.log(`indice ${i} = ${teste[i]}`);
}

for(i in teste){
    console.log(`indice ${i} = ${teste[i]}`);
}

for(i of teste){
    console.log(i);
}

 teste.forEach(function(item, index){console.log(item, index)});

 var a = 0;
 while(a<10){
     console.log(a);
     a++
 }

 do{
    console.log(a) 
    a++
 }while(a<20);


 //Funções
 //funções declarativas
 function funcao(){
    console.log('testando');
 }
 funcao();

 function soma(a,b){
    return a + b;
 }
console.log(soma(5,9));

//Expressões de Funções
var multiplica = function (a,b){
    return a * b;
 }
 console.log(multiplica(5,9));

 //Arrow Function
 var divide = (a,b)=>{
    return a / b;
 }
 console.log(divide(10,2));*/