import React, {useReducer} from 'react'
import './App.css';
import inventory from './inventory'

import CreateItem from './components/CreateItem'


const deleteItem = (item) => {
  //this sends a delete request to the server
  //maybe toggles a 'are you sure' situation
  console.log(item)
}
const editItem = (item) => {
  //item form is popped up so she can make edits to it
  console.log(item)
}

function App() {
  const [item, setItem] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      price: '',
    }
  );

  return (
    <div className="App">
      <header className="App-header">
        ADMIN
      </header>
      <div className="container">
        
        <CreateItem item={item} setItem={setItem} />

        <div className='inventory'>
          {inventory.map((item) => {
            return (
              <div key = {item.id} className = 'item-card' >
                <img alt={item.name} src={item.url}></img>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button className='btn' onClick={() => editItem(item)}>EDIT</button>
                <button className='btn' onClick={() => deleteItem(item)}>DELETE</button>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  );
}

export default App;
