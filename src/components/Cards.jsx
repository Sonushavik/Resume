import React from 'react'
import Lungs from '/assets/bodyPartsImage/lungs.png'

const Cards = ({data}) => {
  return (
    <div className='card'>
        <h3><img src={`/assets/bodyPartsImage/${data.name.toLowerCase()}.png`} alt="" className='bodyPart'/>{data.name}</h3>
        <h5>{data.date}</h5>
        <input type="range" value={"60"} style={{accentColor: `${data.indicatorColor}`}}/>
    </div>
  )
}

export default Cards
