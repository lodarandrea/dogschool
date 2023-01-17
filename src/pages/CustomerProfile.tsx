import AttendButton from '../Components/Buttons/AttendButton'
import { useEffect, useState } from 'react'
import { Customer } from '../model/Customers'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../Store/Hooks'
import { Role } from '../Store/UserSlice'
import QRCodeButton from '../Components/Buttons/QRCodeButton'
import EditButton from '../Components/Buttons/EditButton'
import { myFetch } from '../Services/FetchService'

function CustomerProfile() {
  const [customer, setCustomer] = useState<Customer | undefined>()
  const { customerId } = useParams()
  const role = useAppSelector((state) => state.user.auth0User?.role)
  const [qr, setQr] = useState('')

  useEffect(() => {
    role === Role.Instructor
      ? myFetch(`/customers/${customerId}`, setCustomer)
      : myFetch(`/customers/1`, setCustomer)
  }, [customerId, role])

  return customer ? (
    <div className="mx-8 my-3">
      <img
        className="w-56 bg-gray-300 p-1 m-auto"
        src={
          role === Role.Instructor
            ? `${process.env.REACT_APP_API_URL}/customers/${customerId}/picture`
            : `${process.env.REACT_APP_API_URL}/customers/1/picture`
        }
        alt="customer"
      />
      <h1 className="p-8 text-xl text-center">{customer.name}</h1>
      <h2 className="p-6 text-lg text-center">{customer.description}</h2>
      <div>
        {role === Role.Instructor ? (
          <AttendButton />
        ) : (
          <>
            <QRCodeButton setQr={setQr} />
            <EditButton />
            {qr ? (
              <div className="fixed inset-0 bg-slate-700/80 ">
                <div className="sticky top-11 left-52 bg-white">
                  <button
                    type="button"
                    className="text-lg font-bold"
                    onClick={() => setQr('')}
                  >
                    x
                  </button>
                  <img src={`${qr}`} alt="qrCode" />
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  ) : null
}

export default CustomerProfile
