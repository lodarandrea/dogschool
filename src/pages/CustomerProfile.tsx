import dog from '../img/dog.png'
import AttendButton from '../Components/Buttons/AttendButton'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../Store/Hooks'
import { Role } from '../Store/UserSlice'
import QRCodeButton from '../Components/Buttons/QRCodeButton'
import EditButton from '../Components/Buttons/EditButton'

function CustomerProfile() {
  const { customerId } = useParams()
  const role = useAppSelector((state) => state.user.auth0User?.role)
  return (
    <div className="mx-8 my-3">
      <img className="w-56 bg-gray-300 p-10 m-auto" src={dog} alt="customer" />
      <h1 className="p-8 text-xl text-center">Name of the {customerId}</h1>
      <h2 className="p-6 text-lg text-center">Description and details</h2>
      <div>
        {role === Role.Instructor ? (
          <AttendButton />
        ) : (
          <>
            <QRCodeButton /> <EditButton />
          </>
        )}
      </div>
    </div>
  )
}

export default CustomerProfile
