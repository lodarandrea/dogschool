import { Outlet } from 'react-router-dom'
import '../../App.css'
import Footer from '../Footer'
import Header from '../Header'
import SearchBar from '../SearchBar'

function MainLayout({ enableSearchBar }: { enableSearchBar?: boolean }) {
  return (
    <div className="bg-gray-300">
      <div className=" bg-white flex flex-col text-gray-900 h-screen">
        <Header />
        <div className="flex flex-col flex-1 mt-5">
          {enableSearchBar ? <SearchBar /> : null}
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
