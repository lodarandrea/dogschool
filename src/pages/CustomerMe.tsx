import { useEffect, useState } from 'react'
import ExitButton from '../Components/Buttons/ExitButton'
import QRCodeButton from '../Components/Buttons/QRCodeButton'
import { Customer } from './Customers'

function CustomerMe() {
  const [customer, setCustomer] = useState<Customer | undefined>()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DATABASE_URL}/customers/1`)
      .then((response) => response.json())
      .then((data) => setCustomer(data))
  }, [])

  return customer ? (
    <div className="mx-8 my-3">
      <img
        className="w-56 bg-gray-300 p-1 m-auto"
        src={`${process.env.REACT_APP_DATABASE_URL}/customers/1/picture`}
        alt="customer"
      />
      <h1 className="p-8 text-xl text-center">{customer.name}</h1>
      <h2 className="p-6 text-lg text-center">{customer.description}</h2>
      <QRCodeButton />
      <ExitButton />
    </div>
  ) : null
}

export default CustomerMe
