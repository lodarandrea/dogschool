import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReadQRCodeButton from '../Components/Buttons/ReadQRCodeButton'
import QRReader from '../Components/QRReader'
import bgPaw from '../img/bgPaw.png'

function Dashboard() {
  const [camera, setCamera] = useState(false)

  return (
    <div style={{ backgroundImage: `url(${bgPaw})`, backgroundSize: 'cover' }}>
      <div className="contentItems">
        <Link to={'/customers'}>Customers</Link>
      </div>
      <div className="contentItems">
        <Link to={'/instructors'}>Instructors</Link>
      </div>
      <div className="contentItems">
        <Link to={`instructors/1`}> Profile</Link>
      </div>
      <div className=" justify-center items-end">
        <ReadQRCodeButton setCamera={setCamera} />
      </div>
      <div>{camera ? <QRReader setCamera={setCamera} /> : null}</div>
    </div>
  )
}

export default Dashboard
