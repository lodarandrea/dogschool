import { Link } from 'react-router-dom'
import paw from '../img/paw.png'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import LogoutButton from './Buttons/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

function Header() {
  const [open, setOpen] = useState(false)
  const { user, isAuthenticated } = useAuth0()

  return (
    <div className="flex justify-between my-3 mx-5 ">
      <Link to="/" className="flex items-center">
        <img src={paw} className="h-8 m-2" alt="logo" />
        <h3 className="font-semibold">
          Soma <br />
          Dog Training
        </h3>
      </Link>
      <div>
        {isAuthenticated ? (
          <div className="flex flex-col mx-1 p-4 relative">
            <button
              onClick={() => {
                setOpen(!open)
              }}
              data-popover-target="popover-default"
            >
              <UserCircleIcon className=" h-9 w-9"></UserCircleIcon>
            </button>
            <div
              className={
                open
                  ? 'absolute top-14 right-1 m-auto z-10 bg-turquoise-100 shadow-lg px-3 border-turquoise-200 border-2 rounded-lg'
                  : 'hidden'
              }
            >
              <div className="text-xs font-medium border-b-2 border-turquoise-300 py-2">
                <p>{user?.nickname}</p>
                <p>{user?.email}</p>
              </div>
              <LogoutButton />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Header
