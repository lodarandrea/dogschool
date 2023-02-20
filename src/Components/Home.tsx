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
        className="flex flex-col items-center mt-20 lg:mx-auto lg:px-40 lg:py-20 lg:max-w-2xl"
        style={{
          backgroundImage: `url(${bgPaw})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        }}
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-20 tracking-wider leading-normal lg:mx-64 ">
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
