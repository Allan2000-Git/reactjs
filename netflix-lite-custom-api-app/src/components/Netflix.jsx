import React from 'react'
import seriesData from '../SeriesData'
import Card from './Card'

const favCategory = 'NETFLIX'

const Netflix = () => {
  return (
    <>
        {seriesData.map((value)=>{
            if(value.category.includes(favCategory)){
                return(
                    <Card 
                        title={value.title}
                        category={value.category}
                        poster_path={value.poster_path}
                        link={value.link}
                    />
                ) 
            }
        })}
    </>
  )
}

export default Netflix
