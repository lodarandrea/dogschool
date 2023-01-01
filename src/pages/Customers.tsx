import { Link } from 'react-router-dom'
import '../App.css'
import SearchBar from '../Components/SearchBar'
import { customersList } from '../model/Customer'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import dog from '../img/dog.png'

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
      <div className="flex justify-center">
        <SearchBar setSearch={setSearch} />
      </div>
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
