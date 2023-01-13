import { useAuth0 } from '@auth0/auth0-react'
import { Outlet } from 'react-router-dom'
import '../../App.css'
import { useAppDispatch, useAppSelector } from '../../Store/Hooks'
import { logIn, Role } from '../../Store/UserSlice'
import Footer from '../Footer'
import Header from '../Header'

function MainLayout() {
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

  return (
    <div className="bg-slate-700 py-2">
      <div className=" max-w-lg bg-slate-50 m-auto flex flex-col text-gray-900 h-screen">
        <Header />
        <div className="flex flex-col flex-1 overflow-auto mt-8">
          <Outlet />
        </div>
        {!isAuthenticated || role === Role.Customer ? null : <Footer />}
      </div>
    </div>
  )
}

export default MainLayout
