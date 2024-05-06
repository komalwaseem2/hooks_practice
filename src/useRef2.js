import React, { useRef, useState} from 'react';

export default function InputRef(){

    const inputVal = useRef("");

    const [value,setValue] =useState("");
    
    return (
        <div>
            <input type="text" ref={inputVal}></input>
            <button onClick={()=>setValue(inputVal.current.value)}>Set Value</button>
            <label>Current Value: {value}</label>
        </div>
    );
}