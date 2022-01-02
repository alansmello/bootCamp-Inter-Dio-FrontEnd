var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;

var subtract = document.getElementById('subtract');

var add = document.getElementById('add');

subtract.addEventListener("click",decrement);
add.addEventListener("click", increment);



function increment(){
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;
   
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = "black";
    }if(currentNumber >=10){
        add.disabled = true;
        add.style.background = "gray";
        add.innerText = ''
    }
}



function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = "red";
    }if(currentNumber <=-10){
        subtract.disabled = true;
        subtract.style.background = "gray"
        subtract.innerText = '';
    
    }

}