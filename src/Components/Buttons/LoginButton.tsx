import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className="buttons block m-auto mb-20 sm:w-32 md:w-52 md:py-5 md:px-7  md:text-xl  lg:tracking-wider lg:leading-normal"
      onClick={() => loginWithRedirect()}
    >
      LOG IN
    </button>
  )
}

export default LoginButton
