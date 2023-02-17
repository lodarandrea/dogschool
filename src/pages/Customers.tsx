import { Link } from 'react-router-dom'
import '../App.css'
import SearchBar from '../Components/SearchBar'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { myFetch } from '../Services/FetchService'
import { Customer } from '../model/Customers'

function Customers() {
  const [customersList, setCustomersList] = useState<Array<Customer>>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    myFetch('/customers', setCustomersList)
  }, [])

  const handleFilter = customersList.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.dogName.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div className="tabletGrid ">
      <div className="searchBar">
        <SearchBar setSearch={setSearch} />
      </div>
      <div className="lg:grid lg:mx-10 overflow-y-auto">
        {handleFilter.map((customer) => (
          <div key={customer.id}>
            <Link to={`/customers/${customer.id}`}>
              <Card
                title={customer.name}
                description={customer.dogName}
                imgSrc={`${process.env.REACT_APP_API_URL}/customers/${customer.id}/picture`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customers
