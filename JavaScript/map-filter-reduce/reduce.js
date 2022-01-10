//1-Some todos os números de um array:

function somaNum(arr){
    return arr.reduce((prev, current)=> prev + current)
}

const array = [1,2,5,9,15];

console.log(somaNum(array));

//2-Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const lista = [
    {
        name: 'sabão em pó',
        preço: 30,
    },
    {
        name:'cereal',
        preço: 12,
    },
    {
        name:'toalha',
        preço: 25,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        console.log(prev);
        console.log(current);
        return prev - current.preço;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));