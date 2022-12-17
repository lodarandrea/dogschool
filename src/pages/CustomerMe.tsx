import ExitButton from '../Components/Buttons/ExitButton'
import QRCodeButton from '../Components/Buttons/QRCodeButton'
import dog from '../img/dog.png'

function CustomerMe() {
  return (
    <div className="mx-8 my-3">
      <img className="w-56 bg-gray-300 p-10 m-auto" src={dog} alt="customer" />
      <h1 className="p-8 text-xl text-center">Name of the Customer</h1>
      <h2 className="p-6 text-lg text-center">Description and details</h2>
      <QRCodeButton />
      <ExitButton />
    </div>
  )
}

export default CustomerMe
