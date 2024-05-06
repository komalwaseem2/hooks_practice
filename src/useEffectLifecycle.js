import React, { useEffect, useState } from 'react';

export default function MimicLifecycle(props){

    const [number,setNumber]=useState(0);
    
    useEffect(()=>{
        alert("mimicing componentDidMount")

        return () => {
            alert("mimicing componentWillUnmount")
        };
    },[])
    
    useEffect(()=>{
        alert("mimicing componentDidUpdate - number updated to "+number)
    },[number])
    
    useEffect(()=>{
        alert("mimicing getDerivedStateFromProps");
        setNumber(props.num);
    },[props.num ])



    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={()=>setNumber(n=>n+1)}>Increment</button>
        </div>
    );
}