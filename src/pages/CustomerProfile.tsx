import AttendButton from '../Components/Buttons/AttendButton'
import { useEffect, useState } from 'react'
import { Customer } from '../model/Customers'
import { useParams } from 'react-router-dom'
import { myFetch } from '../Services/FetchService'

function CustomerProfile() {
  const [customer, setCustomer] = useState<Customer | undefined>()
  const { customerId } = useParams()

  useEffect(() => {
    myFetch(`/customers/${customerId}`, setCustomer)
  }, [customerId])

  return customer ? (
    <div className="mx-8 my-3">
      <img
        className="w-56 bg-gray-300 p-1 m-auto"
        src={`${process.env.REACT_APP_API_URL}/customers/${customerId}/picture`}
        alt="customer"
      />
      <h1 className="p-8 text-xl text-center">{customer.name}</h1>
      <h2 className="p-6 text-lg text-center">{customer.description}</h2>

      <AttendButton />
    </div>
  ) : null
}

export default CustomerProfile
