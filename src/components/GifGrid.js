import React  from 'react'
import '../assets/styles/GifItem.css'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
import logo_Loading  from '../assets/img/dots12.0.gif'
export const GifGrid = ({category}) => {

const {data: images, loading} = useFetchGifs(category)

 
  return (
<div className="contentGrid">
{loading &&<div className="loading_style"> <img 
              className='imgCargando' 
              src={logo_Loading} 
              alt="notFound" />  </div>}
<div className="Card-Grid">
  
        {images.map((img)=>(
          <GifGridItem 
          key={img.id}
          {...img} />
          ))}
    
    </div>
          </div>
  )
}
