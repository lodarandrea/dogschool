import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='bg-gray-300'>
      <div className=' bg-white flex flex-col text-gray-900 rounded-xl h-screen'>
        <header className='flex justify-between mt-3 mx-3'>
          <img src={logo} className="h-10" alt="logo" />
          <a className='pr-5' href='#' > ... </a>
        </header>
        <div className='flex flex-col flex-1 mt-10'>
          <div className='contentItems'>
            <a href='#'>Customers</a>
          </div>
          <div className='contentItems'>
            <a href='#'>Instructors</a>
          </div>
          <div className='contentItems'>
            <a href='#'>Profile</a>
          </div>
        </div>
        <div className='flex justify-center font-semibold mb-8'>
          <a href='#' className='px-5'>Customers</a>
          <a href='#' className='px-5'>Instructors</a>
          <a href='#' className='px-5'>Profile</a>
        </div>
      </div>
    </div>
    );
}

export default App;
