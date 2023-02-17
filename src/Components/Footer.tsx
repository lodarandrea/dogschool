import { Link } from 'react-router-dom'
import { menu } from '../model/Menu'

function Footer() {
  return (
    <div className="fixed bottom-0 w-full font-semibold shadow-inner md:flex md:static md:flex-1 md:w-auto md:items-stretch md:h-full md:justify-start md:shadow-lg md:bg-white lg:hidden">
      <div className="flex  justify-center mb-2 md:flex-col md:justify-start">
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
    </div>
  )
}

export default Footer
