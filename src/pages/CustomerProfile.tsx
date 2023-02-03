import AttendButton from '../Components/Buttons/AttendButton'
import { useEffect, useState } from 'react'
import { Customer } from '../model/Customers'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../Store/Hooks'
import { Role } from '../Store/UserSlice'
import QRCodeButton from '../Components/Buttons/QRCodeButton'
import EditButton from '../Components/Buttons/EditButton'
import { myFetch } from '../Services/FetchService'
import AddCreditButton from '../Components/Buttons/AddCreditButton'
import AddCredit from '../Components/AddCredit'
import ShowQrCode from '../Components/ShowQrCode'

function CustomerProfile() {
  const [customer, setCustomer] = useState<Customer | undefined>()
  const { customerId } = useParams()
  const role = useAppSelector((state) => state.user.auth0User?.role)
  const [qr, setQr] = useState('')
  const [showQr, setShowQR] = useState(false)
  const [popUp, setPopUp] = useState(false)
  const credit = useAppSelector((state) => state.credit.value)

  useEffect(() => {
    role === Role.Instructor
      ? myFetch(`/customers/${customerId}`, setCustomer)
      : myFetch(`/customers/1`, setCustomer)
  }, [customerId, role])

  return customer ? (
    <div className="mx-8 my-3">
      <img
        className="profileImg"
        src={
          role === Role.Instructor
            ? `${process.env.REACT_APP_API_URL}/customers/${customerId}/picture`
            : `${process.env.REACT_APP_API_URL}/customers/1/picture`
        }
        alt="customer"
      />
      <h1 className="text-3xl text-center mt-8 p-2 font-semibold">
        {customer.name}
      </h1>
      <h2 className="text text-neutral-500">{customer.description}</h2>
      <div>
        {role === Role.Instructor ? (
          <AttendButton />
        ) : (
          <>
            <div>
              <h1 className="text font-semibold">Credit: {credit}</h1>
            </div>
            <div className="flex flex-col justify-center m-5">
              <AddCreditButton setPopUp={setPopUp} />
              <QRCodeButton setQr={setQr} setShowQr={setShowQR} />
              <EditButton />
            </div>
            {popUp ? <AddCredit setPopUp={setPopUp} /> : null}
            {showQr ? <ShowQrCode setShowQr={setShowQR} qr={qr} /> : null}
          </>
        )}
      </div>
    </div>
  ) : null
}

export default CustomerProfile
