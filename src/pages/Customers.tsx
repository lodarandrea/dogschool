import { Link } from 'react-router-dom'
import CustomerCard from '../Components/CustomerCard'
import '../App.css'
import SearchBar from '../Components/SearchBar'
import { customersList } from '../model/Customer'
import { useEffect, useState } from 'react'

function Customers() {
  const [filteredCustomersList, setFilteredCustomersList] =
    useState(customersList)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setFilteredCustomersList(
      customersList.filter((customer) => {
        return (
          customer.name.toLowerCase().includes(search.toLowerCase()) ||
          customer.dog.toLowerCase().includes(search.toLowerCase())
        )
      })
    )
  }, [search])

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <div>
        {filteredCustomersList.map((customer) => (
          <div className="contentItems">
            <Link to={`/customers/${customer.id}`}>
              <CustomerCard customer={customer} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customers
