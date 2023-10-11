import React, { useState } from 'react'

const Accordion = ({question,answer}) => {

    const [show, setShow] = useState(false)

    const showAnswer = () =>{
        setShow(!show);
    }

    return (
        <>
            <div className='main-heading'>
                <p onClick={showAnswer}>{show? '〰️' :'➕'}</p>
                <h3>{question}</h3>
            </div>
            {
                show && <p className='answers'>{answer}</p>
            }
        </>
    )
}

export default Accordion
