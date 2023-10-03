

function Card(props) {
  return (
    <>
      <div className='card-container'>  
        <div className='card'>
          <img src={props.poster_path} alt=""/>
          <div className='card-info'>
            <span>AN ORIGINAL SERIES</span>
            <h2>{props.title}</h2>
            <a href={props.link}>
              <button id='watch'>Watch Now</button>
            </a>
          </div>
        </div>   
      </div>
    </>
  );
}

export default Card;

