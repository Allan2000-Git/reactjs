import React from 'react';
import Heading from './components/Heading';
import "../src/App.css";
import Netflix from './components/Netflix';
import Amazon from './components/Amazon';

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

const favCategory = 'Netflix'

function FavCat(){
    if(favCategory === 'Netflix'){
        return <Netflix/>
    }else{
        return <Amazon/>
    }
}

const App = () => {
  return (
    <>
        <Heading/>
        {/*{SeriesData.map((value)=>{
        return(
            <Card 
                title={value.title}
                category={value.category}
                poster_path={value.poster_path}
                link={value.link}
            />
        )
        })}*/}

        {/*<FavCat/>*/}

        {favCategory === 'Netflix' ? <Netflix/> : <Amazon/>}
    </>
  )
}

export default App
