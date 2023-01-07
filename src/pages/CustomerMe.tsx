import { useAuth0 } from '@auth0/auth0-react'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ExitButton from '../Components/Buttons/ExitButton'
import LogoutButton from '../Components/Buttons/LogoutButton'
import QRCodeButton from '../Components/Buttons/QRCodeButton'
import dog from '../img/dog.png'
import logo from '../img/logo.svg'

function CustomerMe() {
  const [display, setDisplay] = useState('none')
  const { user } = useAuth0()

  return (
    <>
      <div className="bg-slate-700 py-2">
        <div className=" max-w-lg bg-slate-50 m-auto flex flex-col text-gray-900 h-screen">
          <div className="flex justify-between mt-3 mx-3">
            <Link to="/">
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
                <p className="text-xs font-semibold text-black">
                  {user?.email}
                </p>
                <LogoutButton />
              </div>
            </div>
          </div>
          <div className="mt-14 my-3">
            <img
              className="w-56 bg-gray-300 p-10 m-auto"
              src={dog}
              alt="customer"
            />
            <h1 className="p-8 text-xl text-center">Name of the Customer</h1>
            <h2 className="p-6 text-lg text-center">Description and details</h2>
            <QRCodeButton />
            <ExitButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerMe
