import React, { useMemo, useState } from 'react';

export default function UserList2(){

    const [users,setUsers] = useState([]);
    const [inputValue,setInputValue] = useState("");

    const userCount = useMemo(
        ()=>{
            return users.length;
        },
        [users]
    )

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
           <label>Current Users: {userCount}</label>
           <button onClick={addUser}>Add User</button>
           <ul>
           {users.map((item)=>{
            return <li>{item}</li>;
           })}
           </ul>
        </div>
    );
}