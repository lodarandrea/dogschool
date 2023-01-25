import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../App.css'
import ReadQRCodeButton from '../Components/Buttons/ReadQRCodeButton'
import QRReader from '../Components/QRReader'
import { myFetch } from '../Services/FetchService'

function Dashboard() {
  const [message, setMessage] = useState('')
  const [camera, setCamera] = useState(false)

  function handleQrCode(qrResult: string) {
    myFetch(
      `/customers/1/attend`,
      (data) => {
        setMessage(data.message)
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
        })
      },
      { method: 'PUT' }
    )
  }

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
      <div>
        {camera ? (
          <QRReader setCamera={setCamera} setQrResult={handleQrCode} />
        ) : null}
      </div>
    </div>
  )
}

export default Dashboard
