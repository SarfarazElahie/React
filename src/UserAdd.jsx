import React, { useState } from 'react'

export const UserAdd = () => {
    let [name,setName] = useState('')
    let [age,setAge] = useState('')
    let [id,setId] = useState('')

    let createUser =  async  ()=>{
        console.log(name, age, id)
        const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method: "post",
            body: JSON.stringify({name, age, id })
        });
        response = await response.json();
        if(response){
            alert('New user added')
        }

    }

  return (
    <div>
        <h3>Add new user</h3>
        <input type="text" placeholder='Name' onChange={(event)=> setName(event.target.value)} />
        <br /><br />
        <input type="number" placeholder='age' onChange={(event)=> setAge(event.target.value)} />
        <br /><br />
        <input type="text" placeholder='id' onChange={(event)=> setId(event.target.value)}/>
        <button onClick={createUser}>Add User</button>
    </div>
  )
}
