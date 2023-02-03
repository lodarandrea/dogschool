import {
  AcademicCapIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReadQRCodeButton from '../Components/Buttons/ReadQRCodeButton'
import QRReader from '../Components/QRReader'

function Dashboard() {
  const [camera, setCamera] = useState(false)

  return (
    <div>
      <div className="buttons text-2xl mb-5">
        <Link to={'/customers'}>
          <UserGroupIcon className=" dashboardIcon" />
          Customers
        </Link>
      </div>
      <div className="buttons text-2xl mb-5">
        <Link to={'/instructors'}>
          <AcademicCapIcon className=" dashboardIcon" />
          Instructors
        </Link>
      </div>
      <div className="buttons text-2xl mb-5">
        <Link to={`instructors/1`}>
          <UsersIcon className=" dashboardIcon" /> Profile
        </Link>
      </div>
      <div className=" justify-center items-end">
        <ReadQRCodeButton setCamera={setCamera} />
      </div>
      <div>{camera ? <QRReader setCamera={setCamera} /> : null}</div>
    </div>
  )
}

export default Dashboard
