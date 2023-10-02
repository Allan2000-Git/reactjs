import './App.css';

function App() {

 const h1Style = {
    padding:'1rem 3rem',
    background: '#E2FADB',
    fontSize: '3rem',
    fontWeight: '600',
    color: '#CE8964',
    borderRadius: '1.5rem',
 }

 const spanStyle = { };

let greeting='';

let currDate = new Date(23,5,5,22)
let currHour = currDate.getHours();
if(currHour>=1 && currHour<12){
    greeting='Good Morning';
    spanStyle.color = '#FABC2A';
} else if(currHour>=12 && currHour<16){
    greeting='Good Afternoon';
    spanStyle.color = '#BB4430';
} else if(currHour>=16 && currHour<19){
    greeting='Good Evening';
    spanStyle.color = '#284B63';
} else{
    greeting='Good Night';
    spanStyle.color = '#353535';
}

  return (
    <>
    <h1 style={h1Style}>Hey👋, <span style={spanStyle}>{greeting}</span> folks</h1>
    </>
  );
}

export default App;
