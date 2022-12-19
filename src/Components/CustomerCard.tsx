import dog from '../img/dog.png'
import Customer from '../model/Customer'

interface CustomerCardProps {
  customer: Customer
}

function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <img
        src={dog}
        alt="Customer"
        className="bg-slate-50 w-24 p-3 rounded-full row-span-2"
      />
      <h2 className="col-span-2 text-left text-xl font-bold">
        Name: {customer.name}
      </h2>
      <h3 className="col-span-2 text-left text-lg font-semibold">
        Dog name: {customer.dog}
      </h3>
    </div>
  )
}

export default CustomerCard
