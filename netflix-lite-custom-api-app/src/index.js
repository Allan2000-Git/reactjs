import React from 'react';
import ReactDOM from 'react-dom/client';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
);
