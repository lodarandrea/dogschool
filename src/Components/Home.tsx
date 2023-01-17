import { useAuth0 } from '@auth0/auth0-react'
import CustomerProfile from '../pages/CustomerProfile'
import Dashboard from '../pages/Dashboard'
import { useAppDispatch, useAppSelector } from '../Store/Hooks'
import { logIn, Role } from '../Store/UserSlice'
import LoginButton from './Buttons/LoginButton'

function Home() {
  const role = useAppSelector((state) => state.user.auth0User?.role)
  const { user, isAuthenticated, isLoading } = useAuth0()
  const dispatcher = useAppDispatch()

  if (!isLoading && user) {
    dispatcher(
      logIn({
        name: user.nickname || user.email || 'John Doe',
        email: user.email,
        user_id: user.sub,
      })
    )
  }

  if (!isAuthenticated) {
    return <LoginButton />
  } else {
    if (isLoading) {
      return <p>Loading...</p>
    }
  }

  switch (role) {
    case Role.Customer:
      return <CustomerProfile />
    case Role.Instructor:
      return <Dashboard />
  }

  return null
}

export default Home
