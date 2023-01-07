import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import LogoutButton from './Buttons/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

function Header() {
  const [display, setDisplay] = useState('none')
  const { user } = useAuth0()

  return (
    <div className="flex justify-between my-3 mx-3">
      <Link to="/dashboard">
        <img src={logo} className="h-10" alt="logo" />
        <h3 className="font-bold">Soma Kutyasuli </h3>
      </Link>
      <div className="flex flex-col mx-1 py-3 px-10 relative">
        <button
          onClick={() => {
            if (display === 'none') {
              setDisplay('block')
            } else {
              setDisplay('none')
            }
          }}
        >
          <UserCircleIcon className=" h-9 w-9"></UserCircleIcon>
        </button>
        <div
          style={{ display: display }}
          className="absolute top-12 right-1 m-auto  "
        >
          <p className="text-xs font-semibold text-black">{user?.email}</p>
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}

export default Header
