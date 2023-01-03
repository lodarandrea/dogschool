import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className="text-md font-semibold text-black active:translate-y-1 transform transition px-2 py-1"
    >
      Log Out
    </button>
  )
}

export default LogoutButton
