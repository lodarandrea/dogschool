import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Instructors from './pages/Instructors'
import InstructorProfile from './pages/InstructorProfile'
import MainLayout from './Components/Layouts/MainLayout'
import CustomerProfile from './pages/CustomerProfile'
import { useAppSelector } from './Hooks'
import { Role } from './Components/UserSlice'
import CustomerMe from './pages/CustomerMe'

function App(): JSX.Element {
  const role = useAppSelector((state) => state.user.role)

  const instructorRoutes = (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route
            path="/customers/:customerId"
            element={<CustomerProfile />}
          ></Route>
          <Route path="/instructors" element={<Instructors />}></Route>
          <Route
            path="instructors/:instructorId"
            element={<InstructorProfile />}
          ></Route>
        </Route>
      </Routes>
    </>
  )

  const customerRoutes = (
    <>
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
