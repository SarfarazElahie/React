import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export const UserEdit = () => {

    let [name,setName] = useState('')
    let [age,setAge] = useState('')
    let [idd,setId] = useState('')
    let navigate = useNavigate()


    const {id} = useParams()

    useEffect(()=>{
        getUserData();
    },[])

    let  getUserData = async ()=>{
        let url = "http://localhost:3000/users/" + id;
        let response = await fetch(url)
        response = await response.json()
        setName(response.name)
        setAge(response.age)
        setId(response.id)
    }

    let updateUserData = async()=>{
      let url = "http://localhost:3000/users/" + id;
      let response = await fetch(url, {
        method: "put",
        body: JSON.stringify({name, age, idd})
      })
      response = await response.json()
      if(response){
        alert('User Data Updated')
        navigate('/')
      }
    }
  return (
    <div>
        <h3>Edit User Info :) </h3>
        <input type="text" placeholder='Name' value={name} onChange={(event)=> setName(event.target.value)} />
        <br /><br />
        <input type="number" placeholder='age' value={age} onChange={(event)=> setAge(event.target.value)}/>
        <br /><br />
        <input type="text" placeholder='id' value={idd} onChange={(event)=> setId(event.target.value)}/>
        <button onClick={updateUserData}>Update info</button>
    </div>
  )
}
