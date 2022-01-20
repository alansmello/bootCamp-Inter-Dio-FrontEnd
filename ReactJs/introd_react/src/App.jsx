import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';


const listCustomer = [
    {
      id: 1,
      nome:'Alan Mello'
    },
    {
      id: 2,
      nome:'Sabrina Stulpen'
    },
    {
      id: 3,
      nome:'Cauã Mello'
    },
    {
      id: 4,
      nome:'Caíco Mello'
    },
    {
      id: 5,
      nome:'Nuno Mello'
    }
  ]



const App = ()=>{
    
    const handleClick = (e, id) =>{
        console.log(`Deletar Cliente ${id}`)
    }
    
    const renderCustomers = (customer, index)=>{
        return (
        <div key = {index}>
          <li> {customer.nome } <button onClick={(e)=>handleClick(e, customer.id)}>Deletar Cliente</button> </li>

        </div>
        )
      }

    const name = 'Alan de Souza Mello';

    const handleChange = (e) =>{
        const {value} = e.target
        console.log(value)
    }
    const showEvent = (e)=>{
        console.log('Clicou!')
        console.log(e)
        alert(name)

    }
    const Button = <button onClick={showEvent}>Mostrar Evento</button>
    
    return(
        <div>
            <p>Digital Innovation One</p>
            <input onChange = {handleChange} />
            {Button}
            <div>
            {listCustomer.map(renderCustomers)}
            </div>
            
        </div>
    )
}

export default App;