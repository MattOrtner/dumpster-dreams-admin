import React, {useRef} from 'react'

const ItemForm = ({item, setItem, inventory, setInventory}) => {
  const fileInputRef = useRef(null)

  const handleChange = (evt) => {
    const name = evt.target.name
    const newValue = evt.target.value  
    setItem({ [name]: newValue })
    // ^^^ ^^^ ^^^ code that comes from the photo,
    // and then whatever binary unit thing it is
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInventory(...inventory, item)
    alert('You have submitted the form.')
  }

  const addPhotoButton = () => {
    fileInputRef.current.click()
  }
  return (
      <div className='create-item'>
        <form className='form' onSubmit={() => handleSubmit}>
          <div className="wrapper">
            <input
              type="file" name="file" id="addBtn" ref={fileInputRef} />
              <i className="fas fa-plus fa-2x"></i>
          <input type="button" id="fileBtn" onClick={addPhotoButton} />
          </div>
          <input
            className="inputs"
            placeholder='Name'
            type='text'
            name='name'
            value={item.name}
            onChange={handleChange} 
          />
          <input className="inputs" placeholder='Price' type='number' name='price' value={item.price} onChange={handleChange}  />
          <input className="inputs" placeholder='Description' type='text' name='description' value={item.description} onChange={handleChange}  />
          <button className='btn' type='submit'>Submit</button>
        </form>
      </div>
  )
}

export default ItemForm
