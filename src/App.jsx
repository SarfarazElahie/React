import React, { useEffect, useReducer, useState } from 'react'
import './index.css';
import UserList from './UserList';
import { UserAdd } from './UserAdd';
import { NavLink, Route, Routes } from 'react-router';
import { UserEdit } from './UserEdit';

function App() {

  return (
    <div>
      <ul className='links'>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/add">
            Add User
          </NavLink>
        </li>
      </ul>
      
      <h1>Api In React </h1>
    <Routes>
      <Route path='/' element={<UserList />} />
      <Route path='add' element={<UserAdd />} />
      <Route path='/edit/:id' element={<UserEdit />} />
    </Routes>
    </div>
  )
}


export default App;
