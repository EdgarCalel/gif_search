import React from 'react'
import '../assets/styles/GifItem.css'
const GifGridItem = ({id, title, url}) => {
  return (
    <div className="card animate__animated animate__fadeInRight">
      <img src={url} alt={title}/>
      <h3>{title}</h3>
    </div>
  )
}

export default GifGridItem
