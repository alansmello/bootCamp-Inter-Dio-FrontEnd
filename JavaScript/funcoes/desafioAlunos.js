const alunos =  [
	{
		nome : 'João' ,
		nota : 5 ,
		turma : '1B' ,
	} ,
	{
		nome : 'Sofia' ,
		nota : 9 ,
		turma : '1B' ,
	} ,
	{
		nome : 'Paulo' ,
		nota : 6 ,
		turma : '2C' ,
	} ,
] ;

function AlunosAprovados(array, media){
    let novoArray = [];
    for(let i = 0; i < array.length; i++){
        const {nota, nome} = array[i]

        if(nota >= media){
            novoArray.push(nome);
        }
    }
    return novoArray;
}

console.log(AlunosAprovados(alunos, 6))