import { useAuth0 } from '@auth0/auth0-react'
import { Outlet } from 'react-router-dom'
import '../../App.css'
import { useAppSelector } from '../../Store/Hooks'
import { Role } from '../../Store/UserSlice'
import Footer from '../Footer'
import Header from '../Header'

function MainLayout() {
  const role = useAppSelector((state) => state.user.auth0User?.role)
  const { isAuthenticated } = useAuth0()

  return (
    <div className=" bg-white m-auto flex flex-col h-screen overflow-auto border-t-8 border-turquoise-800 relative">
      <Header />
      <div className="flex">
        {!isAuthenticated || role === Role.Customer ? null : <Footer />}

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
