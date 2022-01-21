import Item from './components/item/index'
import Card from './components/card/index';

const App = ()=>{
  return (
    <>
      <h1>Aplicação com ReactJs</h1>
      <ul>
        
          <Item >Item 1</Item>
          <Item >Item 2</Item>
          <Item >Item 3</Item>
          <Item >Item 4</Item>

      </ul>   
          <Card/>
        
        
      
      
    </>
  )
}

export default App;
