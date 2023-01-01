import '../App.css'
import LoginButton from '../Components/Buttons/Login'
import logo from '../img/logo.svg'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div className="bg-slate-700 py-2">
      <div className=" max-w-lg bg-slate-50 m-auto flex flex-col text-gray-900 h-screen">
        <div className="flex justify-between mt-3 mx-3">
          <Link to="/">
            <img src={logo} className="h-10" alt="logo" />
            <h3 className="font-bold">Soma Kutyasuli </h3>
          </Link>
        </div>
        <div className="flex flex-col flex-1 mt-8 overflow-auto">
          <LoginButton />
        </div>
      </div>
    </div>
  )
}

export default LogIn
