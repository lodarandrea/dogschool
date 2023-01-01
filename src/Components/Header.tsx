import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import { UserCircleIcon } from '@heroicons/react/20/solid'

function Header() {
  return (
    <div className="flex justify-between mt-3 mx-3">
      <Link to="/dashboard">
        <img src={logo} className="h-10" alt="logo" />
        <h3 className="font-bold">Soma Kutyasuli </h3>
      </Link>
      <UserCircleIcon className=" h-9 w-9 m-4"></UserCircleIcon>
    </div>
  )
}

export default Header
