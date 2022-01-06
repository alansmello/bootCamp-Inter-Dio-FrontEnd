const alan = {
    nome: 'Alan Mello',
    idade: 40
}

const sabrina = {
    nome: 'sabrina',
    idade: 42
}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

let bruno = calculaIdade.bind({nome:'Bruno', idade:45});

console.log(calculaIdade.call(alan, 15))
console.log(calculaIdade.call(sabrina, 15))
console.log(calculaIdade.apply(alan, [15]))
console.log(calculaIdade.apply(sabrina, [15]))
console.log(bruno(15))
