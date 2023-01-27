import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReadQRCodeButton from '../Components/Buttons/ReadQRCodeButton'
import QRReader from '../Components/QRReader'

function Dashboard() {
  const [camera, setCamera] = useState(false)

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
      <div className="flex justify-center items-end">
        <ReadQRCodeButton setCamera={setCamera} />
      </div>
      <div>{camera ? <QRReader setCamera={setCamera} /> : null}</div>
    </div>
  )
}

export default Dashboard
