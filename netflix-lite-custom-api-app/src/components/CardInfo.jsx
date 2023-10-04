import React from 'react'

const CardInfo = (props) => {
  return (
    <>
        <div className='card-info'>
        <span>{props.category}</span>
        <h2>{props.title}</h2>
        <a href={props.link}>
        <button id='watch'>Watch Now</button>
        </a>
    </div>
    </>
  )
}

export default CardInfo
