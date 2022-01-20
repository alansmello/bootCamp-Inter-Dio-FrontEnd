import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App'
/*
const buttonA = <button>Primeiro Botão</button>
const buttonB = <button>Segundo Botão</button>
const idade = 15

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

function primeiroJSX(){
  return (
    <div className = "teste">
      Alan Mello - Introdução os ReactJs
    </div>
  )
}

const App = ()=>{

  const renderCustomers = (customer, index)=>{
    return (
      <li key = {index} > {customer.nome } </li>
    )
  }
  */
/*
  const menu = ()=>{

    return (
      <div>
        <header className = "header">
          <div className = "menu-principal">
            <div className = "logomarca">
              Logomarca
            </div>
            <div className='menu-navegacao'>
              
                <div id = 'one'>
                  Sobre
                </div>
                <div>
                  Promoções
                </div>
                <div>
                  Pika
                </div>
                <div>
                  ZéPequeno
                </div>
             
            </div>
          </div>
        </header>
      </div>
    )

  }
  return (
     <div className = "App">
      {primeiroJSX()}
      {idade < 18 ? (
        buttonA
      ) :(
        buttonB
      )}
      
      
    </div> 

    <div>
      <h1>Área de testes</h1>
        <div>
          <ul>
            {listCustomer.map(renderCustomers)}
          </ul>
        </div>
    </div> 
  return (
    <div>
     <App/>
     
    </div>
  )
}
*/

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)

