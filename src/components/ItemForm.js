import React from 'react'

const ItemForm = ({item, setItem, inventory, setInventory}) => {

  const handleChange = (evt) => {
    const name = evt.target.name
    const newValue = evt.target.value  
    setItem({ [name]: newValue })
    // ^^^ ^^^ ^^^ code that comes from the photo,
    // and then whatever binary unit thing it is
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(item) 
    setInventory(...inventory, item)
    alert('You have submitted the form.')
  }

  return (
      <div className='create-item'>
        <form className='form' onSubmit={() => handleSubmit}>
          <legend>UPLOAD +</legend>
          <img alt=''></img>
            <input className="inputs" placeholder='Name' type='text' name='name' value={item.name} onChange={handleChange} />
            <input className="inputs" placeholder='Price' type='number' name='price' value={item.price} onChange={handleChange}  />
          <input className="inputs" placeholder='Description' type='text' name='description' value={item.description} onChange={handleChange}  />
          <button className='btn' type='submit'>Submit</button>
        </form>
      </div>
  )
}

export default ItemForm
