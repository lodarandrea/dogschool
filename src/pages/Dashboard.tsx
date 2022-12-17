import { Link } from 'react-router-dom'
import '../App.css'
import ChangeUserButton from '../Components/ChangeUserButton'

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
      <ChangeUserButton />
    </div>
  )
}

export default Dashboard
