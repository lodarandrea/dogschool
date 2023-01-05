import { Link } from 'react-router-dom'
import '../App.css'
import SearchBar from '../Components/SearchBar'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'

export interface Customer {
  id: number
  name: string
  dogName: string
  description?: string
}

function Customers() {
  const [customersList, setCustomersList] = useState<Array<Customer>>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DATABASE_URL}/customers`)
      .then((response) => response.json())
      .then((data) => setCustomersList(data))
  }, [])

  const handleFilter = customersList.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.dogName.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <div>
        {handleFilter.map((customer) => (
          <div className="contentItems" key={customer.id}>
            <Link to={`/customers/${customer.id}`}>
              <Card
                title={customer.name}
                subTitleLabel={'Dog name:'}
                description={customer.dogName}
                imgSrc={`${process.env.REACT_APP_DATABASE_URL}/customers/1/picture`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customers
