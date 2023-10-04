import CardInfo from "./CardInfo";

function Card(props) {
  return (
    <>
      <div className='card-container'>  
        <div className='card'>
          <img src={props.poster_path} alt=""/>
          <CardInfo category={props.category} title={props.title} link={props.link}/>
        </div>   
      </div>
    </>
  );
}

export default Card;

