import { Link } from 'react-router-dom'
import CustomerCard from '../Components/CustomerCard'
import '../App.css'
import { useAppSelector } from '../Hooks'

function Customers() {
  const customersList = useAppSelector((state) => state.customer.searchResult)

  return (
    <div className="">
      {customersList.map((customersList) => (
        <div className="contentItems">
          <Link to={`/customers/${customersList.id}`}>
            <CustomerCard customer={customersList} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Customers
