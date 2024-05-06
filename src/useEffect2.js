import React, { useEffect, useState } from 'react';

export default function PetList(props){

    const [pets,setpets] = useState([]);
    const [count,setCount] = useState(0);
    const [inputValue,setInputValue] = useState("");

    const handleInputChange=(event)=>{
        setInputValue(event.target.value);
    }

    const addPet=()=>{
        let copy = [...pets];
        copy.push(inputValue);
        setpets(copy);
    }

    useEffect(()=>{
        if (props.pets){
            setpets(props.pets);
            setCount(props.pets.length);
        }
    },[props])

    useEffect(()=>{
        if (pets.length != props.pets.length){
            setCount(c=>c+1)
        }
    },[pets])
    

    return (
        <div>
           <input type="text" value={inputValue} onChange={(event)=>handleInputChange(event)}></input>
           <button onClick={addPet}>Add Pet</button>
           <ul>
           {pets.map((item)=>{
            return <li>{item}</li>;
           })}
           </ul>
           <label>{count}</label>
        </div>
    );
}