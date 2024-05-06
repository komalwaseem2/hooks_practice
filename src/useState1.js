import React, { useState } from 'react';
import MimicLifecycle from './useEffectLifecycle';

export default function FavColor(){
    const [color,setColor] = useState("white");
    const [inputValue,setInputValue] = useState(color);
    const [num,setNum] = useState(0);

    const handleInputChange=(event)=>{
        setInputValue(event.target.value);
    }

    return (
        <div>
            <h1>My favourite color is {color}</h1>
            <input type="text" value={inputValue} onChange={(event)=>handleInputChange(event)}></input>
            <button onClick={()=>setColor(inputValue)}>Set Color</button>
            {/* <MimicLifecycle num={num} id="mimicl"></MimicLifecycle> */}
            <button onClick={()=>{setNum(-1); alert("resetting")}}>Reset</button>
        </div>
    );
}