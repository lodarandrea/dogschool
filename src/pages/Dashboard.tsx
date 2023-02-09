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
    <div className="flex flex-col flex-1 justify-center items-center">
      <Link to={'/customers'} className="buttons dashboardLink">
        <UserGroupIcon className=" dashboardIcon " />
        <p>Customers</p>
      </Link>
      <Link to={'/instructors'} className="buttons dashboardLink">
        <AcademicCapIcon className=" dashboardIcon" />
        <p>Instructors</p>
      </Link>
      <Link to={`instructors/1`} className="buttons dashboardLink">
        <UsersIcon className=" dashboardIcon" />
        <p>Profile</p>
      </Link>
      <div className=" justify-center items-end">
        <ReadQRCodeButton setCamera={setCamera} />
      </div>
      <div>{camera ? <QRReader setCamera={setCamera} /> : null}</div>
    </div>
  )
}

export default Dashboard
