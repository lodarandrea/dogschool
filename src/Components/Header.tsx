import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'

function Header() {
  return (
    <div className="flex justify-between mt-3 mx-3">
      <Link to="/">
        <img src={logo} className="h-10" alt="logo" />
      </Link>
      <a className="pr-5">...</a>
    </div>
  )
}

export default Header
