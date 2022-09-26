import React from 'react'
import "./Cards.css"

 const Cards = ({emoji, head, details}) => {
  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span>{head}</span>
        <span>{details}</span>
        <button className="c-button">Learn More</button>
    </div>
  )
}
export default Cards;
