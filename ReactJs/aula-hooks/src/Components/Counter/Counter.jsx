function Counter(){
    let number = 0;
    
    function upNumber(){
        number = number + 1;
        document.getElementById("counter-box"). innerHTML = number;

    }
    return(
        <>
            <h1 id = "counter-box">{number}</h1>
            <button onClick = {upNumber}>Aumentar</button>
        </>
    )
}

export default Counter;