import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from '../Components/Buttons/Logout'
import QRCodeButton from '../Components/Buttons/QRCodeButton'
import dog from '../img/dog.png'

function CustomerMe() {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return isAuthenticated ? (
    <div className="mx-8 my-3">
      <img className="w-56 bg-gray-300 p-10 m-auto" src={dog} alt="customer" />
      <h1 className="p-8 text-xl text-center">Name of the Customer</h1>
      <h2 className="p-6 text-lg text-center">Description and details</h2>
      <QRCodeButton />
      <LogoutButton />
    </div>
  ) : null
}

export default CustomerMe
