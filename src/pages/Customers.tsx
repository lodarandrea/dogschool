import { Link } from 'react-router-dom'

function Customers() {
  return (
    <div>
      <div className="contentItems">
        <Link to="/customers/customer1">Customer1</Link>
      </div>
      <div className="contentItems">
        <Link to="/customers/customer1">Customer2</Link>
      </div>
      <div className="contentItems">
        <Link to="/customers/customer1">Customer3</Link>
      </div>
    </div>
  )
}

export default Customers
