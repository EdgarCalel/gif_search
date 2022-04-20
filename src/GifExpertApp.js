import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import './assets/styles/GifItem.css'
function GifExpertApp() {
   
    const [categories, setCategories] = useState(['tu puedes'])
// // demonstration the problem the mutation --> reference a object and array
// // for render not execute.
//     const handleAdd_two =()=>{
//   categories.push('patoDonald')
// //other form the mutation de variable. and affects the map in the rendering.
//setCategories('iromAn_socpe')
//   console.log(categories)
// }
    // const HandleAdd =()=> setcategories([...categories, 'edgar'])
  // this cats serious callback, que 
  //setcategories((cats)=>[...cats, 'holas'])
  return (
    <div>
      <h2 className="Titulo-Principal" >Que Gif te gustaria buscar el dia de hoy</h2>
      <AddCategory 
      setCategories={setCategories}
      />
      <hr />
      <div className="Content-card">
      { categories.map((category)=> 
      <GifGrid
        key={category}  
        category={category}/>
       )}
      </div>
    </div>
  )
}

export default GifExpertApp
