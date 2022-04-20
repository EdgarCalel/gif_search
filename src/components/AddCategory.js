import React, { useState } from 'react'

import PropTypes from 'prop-types'
import '../assets/styles/GifItem.css'

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange=(e) => setInputValue(e.target.value)
  
  const handleSubmit=(e) =>{
  e.preventDefault()
  if (inputValue.trim().length > 0) {
    // setCategories(cats =>[...cats, inputValue])
     setCategories(cats =>[ inputValue])
    setInputValue('')
  }else{
    alert('no se puede agregar vacio')
  }
  
  }
  return (
    <>
    <div className="seachBar">
    <form onSubmit={handleSubmit}>
    <input 
      className="InputSearch"
      type="text"
      value={inputValue}
      onChange={handleChange} 
      placeholder="busca tu gif favorito"/>
    </form>
    </div>
    <div >
      <h4 className="Titulo-Principal">Creado por : Edgar Calel</h4>
    {/* <link to="https://www.linkedin.com/in/edgarcalel/">github</link> */}
    </div>
      </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
