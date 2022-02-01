import {useState} from 'react';

function SmartCounter(){
    const [number, setNumber]= useState(1);

return(
    <>
        <h1>{number}</h1>
        <button onClick = {()=> setNumber (number +1)}>Aumentar</button>
    </>
)

}
export default SmartCounter;