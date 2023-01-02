import { Link } from 'react-router-dom'
import '../App.css'
import SearchBar from '../Components/SearchBar'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import dog from '../img/dog.png'
import { CustomersList } from '../model/Customer'

function Customers() {
  const [customersList, setCustomersList] = useState<Array<Customer>>([])
  const [filteredCustomersList, setFilteredCustomersList] =
    useState(CustomersList)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setFilteredCustomersList(
      CustomersList.filter((customer) => {
        return (
          customer.name.toLowerCase().includes(search.toLowerCase()) ||
          customer.dogName.toLowerCase().includes(search.toLowerCase())
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
              <Card
                title={customer.name}
                subTitleLabel={'Dog name:'}
                description={customer.dog}
                imgSrc={dog}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customers
