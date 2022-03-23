import React, { useState } from 'react';
import './Mode.css';

const Mode = () => {

    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [isActive,setActive] = useState(true);

    const onClick3 = () => {
        setShow3(true);
    }
    const onClick4 = () => {
        setShow4(true);
    }
    const onClick5 = () => {
        setShow5(true);
    }
    

    return (

        <div>
            
            <h1>CHOOSE MODE</h1>
            <ul>
               <li onClick={onClick3}>3x3</li>
               <li onClick={onClick4}>4x4</li>
               <li onClick={onClick5}>5x5</li>
            </ul>

            {show3? <Text3/>:null}
            {show4? <Text4/>:null}
            {show5? <Text5/>:null}
        </div>
    )
}

const Text3=() =>{
    return (
        <p>TEXT 3</p>
    )
}
const Text4=() =>{
    return (
        <p>TEXT 4</p>
    )
}
const Text5=() =>{
    return (
        <p>TEXT 5</p>
    )
}

export default Mode;