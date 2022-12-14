import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Instructors from './pages/Instructors'
import Profile from './pages/Profile'
import MainLayout from './Components/Layouts/MainLayout'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>
      <Route element={<MainLayout enableSearchBar={true} />}>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/instructors" element={<Instructors />}></Route>
      </Route>
    </Routes>
  )
}

export default App
