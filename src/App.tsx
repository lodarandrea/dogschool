import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Instructors from './pages/Instructors'
import Profile from './pages/Profile'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="customers" element={<Customers />}></Route>
      <Route path="instuctors" element={<Instructors />}></Route>
      <Route path="profile" element={<Profile />}></Route>
    </Routes>
  )
}

export default App
