import { Outlet } from 'react-router-dom'
import '../../App.css'
import Footer from '../Footer'
import Header from '../Header'

function MainLayout() {
  return (
    <div className="bg-slate-700 py-2">
      <div className=" max-w-lg bg-slate-50 m-auto flex flex-col text-gray-900 h-screen">
        <Header />
        <div className="flex flex-col flex-1 mt-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
