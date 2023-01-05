import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className="text-md font-semibold text-black active:translate-y-1 transform transition py-3"
    >
      Log Out
      <ArrowRightOnRectangleIcon className="h-5 w-5 inline" />
    </button>
  )
}

export default LogoutButton
