// Função anônima:
var soma = function(a,b){
    return a+b
}

console.log(soma(5,4))

// Função autoInvocável:
var auto =(
    function(){
        let name = "Digital Innovation One"
        return name
    }
)()

var soma2 = (
    function(a,b){
        return a+b
    }
)(5,11)

console.log(auto)
console.log(soma2)

//Callbacks -> é uma função passada como argumento para outra.
var calc = function(op, num1, num2){
    return op(num1, num2)
}
console.log(calc(soma, 3, 4))

// Objeto 'arguments'
function findMax(){ //não é colocado parâmetros, pois não terão ou serão indefinidos.
    let max = -Infinity

    for(let i=0; i < arguments.length; i++){ //
        if(arguments[i]>max){
            max = arguments[i]
        }
    }
    return max
}
console.log(findMax(-1,2,3,5,99,152,22,47,69,33))

// Arrays - Spread -> uma forma de lidar separadamente com elementos
function sum(x, y, z){
    return x+y+z
}
var numbers = [1,2,3] 

console.log(sum(...numbers))//-> Colocando reticências, o que era parte de um array se torna um elemento independente.

// Arrays - Rest -> combina os argumentos em um array.
function confereTamanho(...args){ //o que era um elemento independente se torna parte de array.
    return args.length
}
console.log(confereTamanho(1,3,5,4,6))

// Object Desctructuring

var user = {
    id:42,
    displayName: 'alansmello',
    fullName:{
        firstName:'Alan',
        lastName:'Mello'
    }
};

function userId({id}){
    return id
}
//entre chaves podemos filtrar apenas os dados que nos interessam no objeto. 
function getFullName({fullName:{firstName: first, lastName:last}}){
    return `${first} ${last}`
}
//userId(user)
//getFullName(user)

console.log(userId(user))
console.log(getFullName(user))


//Manipulando valores com This:
//método call -> você pode usar um objeto como parâmetro de uma função para que o 'This' dentro dessa função use esse objeto como contexto.
const pessoa ={
    nome: 'Alan Souza Mello',
};
const animal = {
    nome: 'Luna',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa)
getSomething.call(animal)

const myObj = {
    num1:2,
    num2:4,
};
function soma3(a,b){
    console.log(this.num1 + this.num2 + a + b);
}
soma3.call(myObj, 2, 6);

//método apply -> tem um funcionamento muito parecida com o método call, porém há uma diferença que é na hora de você passar argumentos, nesse método deve ser passado por colchetes.

getSomething.apply(pessoa);
getSomething.apply(animal);
soma3.apply(myObj, [2, 6]); // -> aqui a diferença.


// método Bind -> clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.
const printaNomes = function(){
    console.log(this.nome);
}

let bruno = printaNomes.bind({nome:'Bruno'});

bruno();

// ARROW FUNCTIONS
const helloWorld = ()=>{
    return "Hello World";
}
// quando a função tiver apenas uma linha não é necessário digitar o return, nem colocar as chaves.
const helloWorld2 = ()=> "Hello World 2";

// quando a função tiver apenas 1 parâmetro, não é necessário usar parenteses.
const retorneNum = num => num;

//OBS -> A arrow function não faz Hoisting, ou seja, ela deve ser declarada antes de ser chamada.

//Outras Restrições da Arrow functions:
//-> "this" sempre será o objeto global. Métodos (call, apply, bind) para modificar seu valor não irão funcionar;
//-> Não existe o objeto "arguments";
//-> O constructor (ex: new MeuObjeto()) também não pode ser utilizado.

//OBS-> para métodos de um objeto sempre utilize uma função comum e não arrow functions.

console.log(helloWorld());
console.log(helloWorld2());
console.log(retorneNum(5));