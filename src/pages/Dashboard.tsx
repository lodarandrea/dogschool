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
      <div className="buttons text-2xl mb-5 w-2/3">
        <Link to={'/customers'} className="relative mb-5">
          <UserGroupIcon className=" dashboardIcon absolute left-5 top-4" />
          <p className="absolute left-28 top-4">Customers</p>
        </Link>
      </div>
      <div className="buttons text-2xl mb-5 w-2/3">
        <Link to={'/instructors'} className="relative mb-5">
          <AcademicCapIcon className=" dashboardIcon absolute left-5 top-4" />
          <p className="absolute left-28 top-4">Instructors</p>
        </Link>
      </div>
      <div className="buttons text-2xl mb-5 w-2/3">
        <Link to={`instructors/1`} className="relative mb-5">
          <UsersIcon className=" dashboardIcon absolute left-5 top-4" />
          <p className="absolute left-28 top-4">Profile</p>
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
