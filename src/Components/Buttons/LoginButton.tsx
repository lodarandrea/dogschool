import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className="block m-auto text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  )
}

export default LoginButton
