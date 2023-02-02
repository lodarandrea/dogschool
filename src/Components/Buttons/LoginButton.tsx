import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className="buttons block m-auto text-2xl p-5 mb-20"
      onClick={() => loginWithRedirect()}
    >
      LOG IN
    </button>
  )
}

export default LoginButton
