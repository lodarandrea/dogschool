import AttendButton from '../Components/Buttons/AttendButton'
import { useEffect, useState } from 'react'
import { Customer } from './Customers'

function CustomerProfile() {
  const [customer, setCustomer] = useState<Customer | undefined>()

  useEffect(() => {
    fetch('http://localhost:8080/api/customers/1')
      .then((response) => response.json())
      .then((data) => setCustomer(data))
  }, [])

  return customer ? (
    <div className="mx-8 my-3">
      <img
        className="w-56 bg-gray-300 p-1 m-auto"
        src="http://localhost:8080/api/customers/1/picture"
        alt="customer"
      />
      <h1 className="p-8 text-xl text-center">{customer.name}</h1>
      <h2 className="p-6 text-lg text-center">{customer.description}</h2>

      <AttendButton />
    </div>
  ) : null
}

export default CustomerProfile
