import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="flex justify-center font-semibold mb-8">
      <Link to="/" className="px-5">
        Home
      </Link>
      <Link to="/customers" className="px-5">
        Customers
      </Link>
      <Link to="/instuctors" className="px-5">
        Instructors
      </Link>
    </div>
  )
}

export default Footer
