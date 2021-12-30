let adicionar = document.getElementById('button');

adicionar.addEventListener("click", incluirLista);

function incluirLista(){
    var inputs = document. querySelector("#recebeLista");
    var inputs2 = document.getElementById('recebeLista')
    var texto = inputs. value;
    let item = document.createElement('label');
    item.classList.add('toDoItem');
    item.innerHTML = `<input type="checkbox">
                    <div> ${texto} <div> <br>`;
   

    if(inputs2.value != ''){
        document.getElementById('list').appendChild(item);
    }
    
    inputs2.value = "";
}
/*
function criarItem(){
    let item = document.createElement('label');
    item.classList.add('toDoItem');
    item.innerHTML = `<input type="checkbox">  teste de item <br>`
    document.getElementById('list').appendChild(item)
}*/