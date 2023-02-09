import { useAuth0 } from '@auth0/auth0-react'
import CustomerProfile from '../pages/CustomerProfile'
import Dashboard from '../pages/Dashboard'
import { useAppSelector } from '../Store/Hooks'
import { Role } from '../Store/UserSlice'
import LoginButton from './Buttons/LoginButton'
import bgPaw from '../img/bgPaw.png'

function Home() {
  const role = useAppSelector((state) => state.user.auth0User?.role)
  const { isAuthenticated } = useAuth0()

  if (!isAuthenticated) {
    return (
      <div
        className="flex flex-col items-center"
        style={{
          backgroundImage: `url(${bgPaw})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        }}
      >
        <h1 className="text-5xl font-black mt-10 mb-20 tracking-wider leading-normal">
          WELCOME <br />
          BACK!
        </h1>
        <LoginButton />
      </div>
    )
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
