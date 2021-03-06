import React, { useRef, useState } from 'react';
import Game from '../components/Game';

const Mode = () => {

    const [show, setShow] = useState(false);
    const [activeClass, setActiveClass] = useState(false);
    const gametype1 = useRef(null);
    const gametype2 = useRef(null);
    const gametype3 = useRef(null);
    const [vrednost, setVrednost] = useState(null);

    const toggleClass = () => {
        setActiveClass(!activeClass);
    }
    const cMode = () => {
        setShow(false);
        toggleClass();
    }
    return (

        <div>
           
            <div >
            <div className="layout">
            <h1 className={activeClass? 'hide' : 'glitch'}>CHOOSE MODE</h1>
            <ul className={activeClass? 'hide' : 'glitch'}>
               <li ref={gametype1} value="9" onClick = {() =>{
                   setShow(true);
                   setVrednost(gametype1.current.value);
                   toggleClass()
                   }}>3x3</li>
               <li ref={gametype2} value="16" onClick = {() =>{
                   setShow(true);
                   setVrednost(gametype2.current.value);
                   toggleClass()
                   }}>4x4</li>
               <li ref={gametype3} value="25" onClick = {() =>{
                   setShow(true);
                   setVrednost(gametype3.current.value);
                   toggleClass()
                   }}>5x5</li>
            </ul>
            </div>
        </div>
        <div className="center">
            {show ? <Game value={vrednost}/> : null}

            <button onClick={cMode} className={activeClass?'btnReset':'hide'}>
          Go back
        </button>
         </div>
        </div>
    )
}

export default Mode;