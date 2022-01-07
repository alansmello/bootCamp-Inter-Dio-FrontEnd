function verificaPalindromo(string){
    if (!string) throw "string inexistente!";
    return string.split("").reverse().join("") === string
}

function tryCathExemplo(string){
    try{
        verificaPalindromo(string)
    }catch(e){
        console.log(e)
    }
    finally{
        console.log(`A string enviada foi:  ${string}`)
    }
}
tryCathExemplo('')

const MeuErro = new Error('mensagem Inválida!!!')
MeuErro.name = 'InvalidMessage'
throw MeuErro;