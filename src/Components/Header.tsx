import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import { Bars3Icon } from '@heroicons/react/20/solid'

function Header() {
  return (
    <div className="flex justify-between mt-3 mx-3">
      <Link to="/">
        <img src={logo} className="h-10" alt="logo" />
        <h3 className="font-bold">Soma Kutyasuli </h3>
      </Link>
      <Bars3Icon className=" h-9 w-9 m-4"></Bars3Icon>
    </div>
  )
}

export default Header
