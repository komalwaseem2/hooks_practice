import React, { useCallback, useRef, useState} from 'react';
import Name from './useCallback1';

export default function InputRef2(){

    const inputVal = useRef("");

    const [value,setValue] =useState("");

    const handleOnClick=useCallback(()=>{
        setValue(inputVal.current.value)
    });
    
    return (
        <div>
            <input type="text" ref={inputVal}></input>
            <button onClick={handleOnClick}>Set Value</button>
            <label>Current Value: {value}</label>
            <br></br>
            <Name name={value}></Name>
        </div>
    );
}