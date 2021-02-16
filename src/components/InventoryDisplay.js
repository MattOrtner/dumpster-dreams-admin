import React from 'react'

const InventoryDisplay = ({ inventory }) => {
  const deleteItem = (item) => {
    //this sends a delete request to the server
    //maybe toggles a 'are you sure' situation
    console.log(item)
  }
  const editItem = (item) => {

    console.log(item)
  }

  return (
    inventory.map((item) => 
    <div>
      <div key={item.id} className='item-card' >
        <img alt={item.name} src={item.url}></img>
        <h4>{item.name}</h4>
          <p>${item.price}</p>
          <p className='item-description'>{item.description}</p>
        <button className='btn' onClick={() => editItem(item)}>EDIT</button>
        <button className='btn' onClick={() => deleteItem(item)}>DELETE</button>
      </div>
    </div>
    )
  )
}

export default InventoryDisplay
