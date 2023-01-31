import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className="text-md font-semibold active:translate-y-1 transform transition m-1"
    >
      Log Out
      <ArrowRightOnRectangleIcon className="h-5 w-5 inline mx-1" />
    </button>
  )
}

export default LogoutButton
