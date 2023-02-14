import { Link } from 'react-router-dom'
import { menu } from '../model/Menu'

function Footer() {
  return (
    <div className="flex justify-center mb-2 font-semibold shadow-inner md:flex-col md:h-full md:justify-start md:top-24 md:left-0 md:absolute md:shadow-lg md:bg-white lg:hidden">
      {menu.map((menuPoint) => (
        <>
          <Link to={`${menuPoint.url}`} className="footerLink">
            {menuPoint.icon}
            <p className="hidden md:block md:text-xs md:px-2">
              {menuPoint.name}
            </p>
          </Link>
        </>
      ))}
    </div>
  )
}

export default Footer
