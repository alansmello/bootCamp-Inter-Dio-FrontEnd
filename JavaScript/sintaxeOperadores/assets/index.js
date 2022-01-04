let n1 =Number(prompt('Insira o primeiro valor: '));
let n2 =Number(prompt('Insira o segundo valor: ')); 

function pegaNumero(n1, n2){
    let soma = n1 + n2
    if (n1 == n2){
        if(soma >10){
            if(soma <=20){
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor ou igual a 20`);
            }else{
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`); 
            }     
        }else{
            alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma},  a soma é menor que 10 e menor que 20`);  
        }
    }else{
        if(soma >10){
            if(soma <= 20){
                alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
            }else{
            alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é maior que 10, e também maior que 20`);
            }  
        }else{
            alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, sua soma é menor que 10 e menor que 20`);
    }
}
}
pegaNumero(n1, n2);

