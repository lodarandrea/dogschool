import './App.css'
import { Routes, Route } from 'react-router-dom'
import Customers from './pages/Customers'
import Instructors from './pages/Instructors'
import InstructorProfile from './pages/InstructorProfile'
import MainLayout from './Components/Layouts/MainLayout'
import CustomerProfile from './pages/CustomerProfile'
import Home from './Components/Home'
import EditProfileForm from './pages/EditProfileForm'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="customers/:customerId" element={<CustomerProfile />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route
          path="instructors/:instructorId"
          element={<InstructorProfile />}
        />
        <Route path="/edit" element={<EditProfileForm />} />
      </Route>
    </Routes>
  )
}

export default App
