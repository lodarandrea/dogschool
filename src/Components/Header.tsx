import { Link } from 'react-router-dom'
import paw from '../img/paw.png'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import LogoutButton from './Buttons/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import { menu } from '../model/Menu'
import { useAppSelector } from '../Store/Hooks'
import { Role } from '../Store/UserSlice'

function Header() {
  const [open, setOpen] = useState(false)
  const { user, isAuthenticated } = useAuth0()
  const role = useAppSelector((state) => state.user.auth0User?.role)

  return (
    <>
      <div className="flex justify-between py-3 px-5 md:my-1 md:shadow-md md:shadow-neutral-100">
        <Link to="/" className="flex items-center">
          <img src={paw} className="h-7 lg:h-8 mx-2" alt="logo" />
          <h3 className="text-sm lg:text-base font-semibold">
            Soma <br />
            Dog Training
          </h3>
        </Link>

        {isAuthenticated ? (
          <div className="lg:flex">
            {role === Role.Instructor ? (
              <div className="hidden lg:flex">
                {menu.map((menuPoint) => (
                  <Link
                    key={menuPoint.name}
                    to={`${menuPoint.url}`}
                    className="hidden lg:block lg:my-auto lg:mx-3 lg:text-base lg:font-medium"
                  >
                    {menuPoint.name}
                  </Link>
                ))}
              </div>
            ) : null}

            <div className="flex flex-col mx-1 py-4 relative">
              <button
                onClick={() => {
                  setOpen(!open)
                }}
                data-popover-target="popover-default"
              >
                <UserCircleIcon className="h-7 w-7 md:h-9 md:w-9 lg:h-10 lg:w-10"></UserCircleIcon>
              </button>
              <div
                className={
                  open
                    ? 'absolute top-14 right-1 m-auto z-50 bg-turquoise-100 shadow-lg px-3 border-turquoise-200 border-2 rounded-lg'
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
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Header
