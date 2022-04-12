import React, { useRef, useState } from 'react';
import Game from '../components/Game';
import { NavLink } from 'react-router-dom';

const Mode = () => {

    const [show, setShow] = useState(false);
    const [activeClass, setActiveClass] = useState(false);
    const [showCustom, setShowCustom] = useState(false);
    const [input, setInput] = useState('');
    const [input2,setInput2] = useState('');
    const gametype1 = useRef(null);
    const gametype2 = useRef(null);
    const gametype3 = useRef(null);
    const [vrednost, setVrednost] = useState(null);
    const [classC, setClassC] = useState('board3');

    const toggleClass = () => {
        setActiveClass(!activeClass);
    }

    const onClick = () => {
        return(
        <>
        <input value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <input value={input2} onChange={(e)=>{setInput2(e.target.value)}}/>
        </>
        )
        
    }
    const onClickCustom = () => {
        
        setShowCustom(true);
    }

    return (

        <div>
            <div className={activeClass? 'hide' : 'glitch'}>
            <div className="layout" >
            <h1>CHOOSE MODE</h1>
            <ul>
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
               <li onClick={onClick}>Custom</li>
            </ul>
            </div>
</div>
            

            {/* <select ref={gametype} id="game_type">
				<option value="9">3 x 3 Board</option>
				<option value="16">4 x 4 Board</option>
				<option value="25">5 x 5 Board</option>
			</select> */}

            {/* <button className={classC} onClick={() =>{

                setClassC('board4');
                setShow(true);
                setVrednost(gametype1.current.value);
                const nesto = parseInt(gametype1.current.value)
                
                

            }} >KLIKNI ME</button> */}
            
            {show ? <Game value={vrednost}/> : null}
         
        </div>
    )
}

export default Mode;