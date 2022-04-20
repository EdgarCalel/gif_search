import React,{useState, useEffect}  from 'react'
import GifGridItem from './GifGridItem'
import '../assets/styles/GifItem.css'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { getGifs } from '../utils/getGifs'

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([])
useEffect(() =>{
    getGifs(category)
    .then( setImages );
}, [category])


 
  return (
<>
<h3>{category}</h3>
<div className="Card-Grid">
        {images.map((img)=>(
          <GifGridItem 
          key={img.id}
          {...img} />
          ))}
    
    </div>
          </>
  )
}
