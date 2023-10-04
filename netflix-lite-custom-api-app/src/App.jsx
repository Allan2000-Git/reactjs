import React from 'react';
import Card from './components/Card';
import Heading from './components/Heading';
import "../src/App.css";
import SeriesData from './SeriesData';

// function seriesCard(value){
//   return(
//     <Card 
//         title={value.title}
//         poster_path={value.poster_path}
//         link={value.link}
//       />
//   )
// }

// {SeriesData.map(seriesCard)}

const App = () => {
  return (
    <>
        <Heading/>
        {SeriesData.map((value)=>{
        return(
            <Card 
                title={value.title}
                poster_path={value.poster_path}
                link={value.link}
            />
        )
        })}
    </>
  )
}

export default App
