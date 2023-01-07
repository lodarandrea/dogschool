import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Instructors from './pages/Instructors'
import InstructorProfile from './pages/InstructorProfile'
import MainLayout from './Components/Layouts/MainLayout'
import CustomerProfile from './pages/CustomerProfile'
import { useAppSelector } from './Store/Hooks'
import { Role } from './Store/UserSlice'
import CustomerMe from './pages/CustomerMe'
import LogIn from './pages/Login'
import SuccessfulLogIn from './pages/SuccessfulLogIn'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/successfullogin" element={<SuccessfulLogIn />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="customers/:customerId" element={<CustomerProfile />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route
          path="instructors/:instructorId"
          element={<InstructorProfile />}
        />
      </Route>
      <Route path="/customerme" element={<CustomerMe />} />
    </Routes>
  )
}

export default App
