import React, { useState } from 'react';

export default function UserList(){

    const [users,setUsers] = useState([]);
    const [inputValue,setInputValue] = useState("");

    const handleInputChange=(event)=>{
        setInputValue(event.target.value);
    }

    const addUser=()=>{
        let copy = [...users];
        copy.push(inputValue);
        setUsers(copy);
    }

    return (
        <div>
           <input type="text" value={inputValue} onChange={(event)=>handleInputChange(event)}></input>
           <button onClick={addUser}>Add User</button>
           <ul>
           {users.map((item)=>{
            return <li>{item}</li>;
           })}
           </ul>
        </div>
    );
}