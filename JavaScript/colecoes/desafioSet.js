const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function unirElementos(array) {
	let novosElementos = new Set(array);
	return [...novosElementos];
}



console.log(unirElementos(array));