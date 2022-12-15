import dog from '../img/dog.png'
import '../App.css'

function Customer1() {
  return (
    <div className="mx-8 my-3">
      <img
        className="max-w-xs bg-gray-300 p-10 m-auto"
        src={dog}
        alt="customer"
      />
      <h1 className="p-8 text-2xl text-center">Name of the Customer</h1>
      <h2 className="p-6 text-xl text-center">Description and details</h2>
    </div>
  )
}

export default Customer1
