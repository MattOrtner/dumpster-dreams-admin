import React, {useReducer, useState} from 'react'
import './App.css';
import currentInventory from './inventory'

import ItemForm from './components/ItemForm'
import InventoryDisplay from './components/InventoryDisplay'


function App() {
  const [inventory, setInventory] = useState(currentInventory)
  const [item, setItem] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      price: '',
      description: '',
    }
  );

  return (
    <div className="App">
      <header className="App-header">
        <span className="dreams">Dumpster Dreams</span>
        <span className="admin">ADMIN</span>
      </header>
      <div className="container">
        
        <ItemForm item={item} setItem={setItem} inventory={inventory} setInventory={setInventory}/>

        <div className='inventory'>
          <InventoryDisplay inventory={inventory} />
        </div>

      </div>
    </div>
  );
}

export default App;
