/*Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof*/

function validaErro(array, num){
    
    try{
        if(!array && !num) throw new ReferenceError('Envie os parâmetros');
        if(typeof(array) !== 'object' ) throw new TypeError('O array não é um objeto');
        if(typeof(array) !== 'number') throw new TypeError('O num precisa ser to tipo number.')
        if(array.length != num) throw new RangeError('Tamanho inválido!');

        return array;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Esse erro é um ReferenceError.");
            console.log(e.message);  
        }else if(e instanceof TypeError){
            console.log("Esse erro é um TypeError.");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Esse erro é um RangeError.");
            console.log(e.message);
    }else{
        console.log('Tipo de erro não esperado.')
    }
}
}
console.log(validaErro([1,9,65,85], 'alan'));
