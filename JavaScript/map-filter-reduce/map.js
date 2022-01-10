const array = [2,6,9,4,25,31,2,88,74,12,35,62,22,1];

const newArray = array.map(item => item * 5);

console.log(newArray)


// Map com This:
const maca = {
    value:2,
}

const laranja = {
    value:3,
}

function mapThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)

}

const num = [1,2];

console.log('this -> maça', mapThis(num, maca));
console.log('this -> laranja', mapThis(num, laranja));
