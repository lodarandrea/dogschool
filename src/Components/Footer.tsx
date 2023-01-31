import { Link, useLocation } from 'react-router-dom'
import {
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'

function Footer() {
  const location = useLocation()
  const isIndex = location.pathname === '/'
  const isCustomers = location.pathname === '/customers'
  const isInstructors = location.pathname === '/instructors'

  return (
    <div className="flex justify-center mb-2 font-semibold shadow-inner">
      <Link to="/" className="footerLink">
        <HomeIcon
          className={`footerIcon ${
            isIndex ? 'border-b-4 border-turquoise-800' : ''
          }`}
        />
      </Link>
      <Link to="/customers" className="footerLink">
        <UserGroupIcon
          className={`footerIcon ${
            isCustomers ? 'border-b-4 border-turquoise-800' : ''
          }`}
        />
      </Link>
      <Link to="/instructors" className="footerLink">
        <AcademicCapIcon
          className={`footerIcon ${
            isInstructors ? 'border-b-4 border-turquoise-800' : ''
          }`}
        />
      </Link>
    </div>
  )
}

export default Footer
