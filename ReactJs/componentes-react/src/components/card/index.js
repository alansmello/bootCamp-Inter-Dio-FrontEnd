import {useState} from 'react';
import Button from '../button/index';

const Card = ()=>{
    const [valor, setValor] = useState(0);
    
    function add(){
        setValor(valor + 1)
    }
    function sub(){
        setValor(valor -1)
    }
    
    
    return (

    <div className="card">
        <div className="card-header">
        Meu primeiro Card
        </div>
            <div className="card-body">
                
                <Button 
                    className="btn btn-info" 
                    onClick = {add}>
                        Adicionar
                </Button>
                
                <Button 
                    className="btn btn-danger" 
                    onClick = {sub}>
                        Subtrair
                </Button>
                
                <p>{valor}</p>
                
        </div>
    </div>
    )
}

export default Card;