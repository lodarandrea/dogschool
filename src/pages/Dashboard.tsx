import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Customers from './Customers'
import logo from '../img/logo.svg'
import '../App.css'
import Instructors from './Instructors'
import Profile from './Profile'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Dashboard() {
  return (
    <div className="bg-gray-300">
      <div className=" bg-white flex flex-col text-gray-900 h-screen">
        <Header />
        <div className="flex flex-col flex-1 mt-10">
          <div className="contentItems">
            <Link to="/customers">Customers</Link>
          </div>
          <div className="contentItems">
            <Link to="/instuctors">Instructors</Link>
          </div>
          <div className="contentItems">
            <Link to="/profile">Profile</Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
