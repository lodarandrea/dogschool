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
    <div className="mx-5 h-screen">
      <div className=" my-3  lg:mt-5 lg:flex lg:flex-col lg:mx-10 mb-10">
        <h1 className="m-1 text-base lg:text-xl font-semibold  lg:mx-0">
          Welcome to Soma Dog Training!
        </h1>
        <p className="m-1 text-sm lg:text-lg font-normal text-left  lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center md:mt-10 md:items-stretch">
        <div className="md:flex md:flex-row md:flex-1 ">
          <Link to={'/customers'} className="buttons dashboardLink ">
            <UserGroupIcon className=" dashboardIcon  " />
            <p className="dashboardLinkText">Customers</p>
          </Link>
          <Link to={'/instructors'} className="buttons dashboardLink ">
            <AcademicCapIcon className=" dashboardIcon" />
            <p className="dashboardLinkText">Instructors</p>
          </Link>
          <Link to={`instructors/1`} className="buttons dashboardLink">
            <UsersIcon className=" dashboardIcon" />
            <p className="dashboardLinkText">Profile</p>
          </Link>
        </div>
        <div className="flex justify-center items-end lg:hidden">
          <ReadQRCodeButton setCamera={setCamera} />
        </div>
        <div>{camera ? <QRReader setCamera={setCamera} /> : null}</div>
      </div>
    </div>
  )
}

export default Dashboard
