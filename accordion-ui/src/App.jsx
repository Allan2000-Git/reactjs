import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'
import {faq} from './components/FaqData'

function App() {
  const [data, setData] = useState(faq);

  return (
    <>
      <section className='main-div'>
        <h1>React FAQs</h1>
        {
          data.map((faq)=>{
            return <Accordion key={faq.id} {...faq}/>
          })
        }
      </section>
    </>
  )
}

export default App
