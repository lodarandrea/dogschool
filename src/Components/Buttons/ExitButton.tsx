import { useAuth0 } from '@auth0/auth0-react'

function ExitButton() {
  const { logout } = useAuth0()
  return (
    <button
      type="button"
      onClick={() => logout({ returnTo: window.location.origin })}
      className="block m-auto text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
    >
      Exit
    </button>
  )
}

export default ExitButton
