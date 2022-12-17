import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Instructors from './pages/Instructors'
import Profile from './pages/Profile'
import MainLayout from './Components/Layouts/MainLayout'
import CustomerProfile from './pages/CustomerProfile'
import { useAppSelector } from './Hooks'
import { Role } from './Components/UserSlice'
import CustomerMe from './pages/CustomerMe'

function App(): JSX.Element {
  const role = useAppSelector((state) => state.user.role)

  const instructorRoutes = (
    <>
      <p>Role.Instructor</p>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/customers/:customerId"
            element={<CustomerProfile />}
          ></Route>
        </Route>
        <Route element={<MainLayout enableSearchBar={true} />}>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/instructors" element={<Instructors />}></Route>
        </Route>
      </Routes>
    </>
  )

  const customerRoutes = (
    <>
      <p>Customer</p>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CustomerMe />}></Route>
        </Route>
      </Routes>
    </>
  )

  return role === Role.Instructor ? instructorRoutes : customerRoutes
}

export default App
