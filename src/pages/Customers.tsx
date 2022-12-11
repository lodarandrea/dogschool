import { Link } from 'react-router-dom'

function Customers() {
  return (
    <div>
      <div className="contentItems">
        <Link to="/customers">Customer1</Link>
      </div>
      <div className="contentItems">
        <Link to="/customers">Customer2</Link>
      </div>
      <div className="contentItems">
        <Link to="/customers">Customer3</Link>
      </div>
    </div>
  )
}

export default Customers
