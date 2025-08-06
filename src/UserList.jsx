import React, { useEffect, useReducer, useState } from 'react'
import './index.css';
import { useNavigate } from 'react-router';

function UserList() {

  let [userdb,SetUser] = useState([])
  let navigate = useNavigate()

  useEffect(()=>{
    userData();
  },[])

  async function userData(){
    const url = "http://localhost:3000/users"
    let response = await fetch(url)
    response = await response.json()
    SetUser(response)
  }

  let deleteUser =  async(id)=>{
    const url = "http://localhost:3000/users"
    let response = await fetch(url+"/"+id, {
        method: "delete"
    })
   response = await response.json()
   if(response){
    alert('Record deleted')
    userData()
   }
  }

  let editUser = (id)=>{
        navigate('/edit/' + id)
  }

  return (
    <div>
  
      <h2>User Data : </h2>
      <ul className='user-list' style={{fontWeight: '700'}}>
        <li>Name: </li>
        <li>Age: </li>
        <li>Id: </li>
        <li>Remove: </li>
        <li>Edit: </li>
      </ul>
      {
        userdb.map((item)=>(
          <div key={item.name}>
            <ul className='user-list'>
              <li>{item.name}</li>
              <li>{item.age}</li>
              <li>{item.id}</li>
              <li><button onClick={()=> deleteUser(item.id)}>Delete</button></li>
              <li><button onClick={()=> editUser(item.id)}>Edit</button></li>
            </ul>
          </div>
        ))
      }

    </div>
  )
}


export default UserList;
