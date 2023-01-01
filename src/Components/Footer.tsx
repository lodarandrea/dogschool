import React from 'react'
import { Link } from 'react-router-dom'
import {
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'

function Footer() {
  return (
    <div className="flex justify-center mb-2 font-semibold text-xs text-center shadow-inner">
      <Link
        to="/dashboard"
        className="mt-2 px-5 active:translate-y-1 transform transition"
      >
        <HomeIcon className="w-12 h-12 p-2 m-auto" />
        Home
      </Link>
      <Link
        to="/customers"
        className="mt-2 px-5 active:translate-y-1 transform transition"
      >
        <UserGroupIcon className="w-12 h-12 p-2 m-auto" />
        Customers
      </Link>
      <Link
        to="/instructors"
        className="mt-2 px-5 active:translate-y-1 transform transition"
      >
        <AcademicCapIcon className="w-12 h-12 p-2 m-auto" />
        Instructors
      </Link>
    </div>
  )
}

export default Footer
