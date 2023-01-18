import { Link } from 'react-router-dom'
import '../App.css'
import ReadQRCodeButton from '../Components/Buttons/ReadQRCodeButton'

function Dashboard() {
  return (
    <div>
      <div className="contentItems">
        <Link to={'/customers'}>Customers</Link>
      </div>
      <div className="contentItems">
        <Link to={'/instructors'}>Instructors</Link>
      </div>
      <div className="contentItems">
        <Link to={`instructors/1`}> Profile</Link>
      </div>
      <div className="contentItems">
        <ReadQRCodeButton />
      </div>
    </div>
  )
}

export default Dashboard
