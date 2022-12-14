import { Link } from 'react-router-dom'
import '../App.css'

function Dashboard() {
  return (
    <div>
      <div className="contentItems ">
        <Link to={'/customers'}>Customers</Link>
      </div>
      <div className="contentItems">
        <Link to={'/instructors'}>Instructors</Link>
      </div>
      <div className="contentItems">
        <Link to={'/profile'}> Profile</Link>
      </div>
    </div>
  )
}

export default Dashboard
