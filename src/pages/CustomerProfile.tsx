import dog from '../img/dog.png'
import AttendButton from '../Components/AttendButton'
import { useParams } from 'react-router-dom'

function CustomerProfile() {
  const { customerId } = useParams()
  return (
    <div className="mx-8 my-3">
      <img className="w-56 bg-gray-300 p-10 m-auto" src={dog} alt="customer" />
      <h1 className="p-8 text-xl text-center">Name of the {customerId}</h1>
      <h2 className="p-6 text-lg text-center">Description and details</h2>
      <AttendButton />
    </div>
  )
}

export default CustomerProfile
