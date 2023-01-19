import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useZxing } from 'react-zxing'
import '../App.css'
import ReadQRCodeButton from '../Components/Buttons/ReadQRCodeButton'

function Dashboard() {
  const [message, setMessage] = useState('')
  const [camera, setCamera] = useState(false)
  const [qrResult, setQrResult]: any = useState(null)
  const { ref } = useZxing({
    paused: !camera,
    onResult(result) {
      console.log(result)
      setQrResult(result.getText())
      setCamera(false)
    },
  })
  useEffect(() => {
    if (qrResult) {
      toast.promise(
        fetch(`${process.env.REACT_APP_API_URL}/customers/1/attend`, {
          method: 'PUT',
        })
          .then((response) => response.json())
          .then((data) => setMessage(data.message)),
        {
          success: message,
          error: 'Promise rejected 🤯',
        },
        {
          position: toast.POSITION.TOP_CENTER,
        }
      )
    }
  }, [message, qrResult])

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
          <div className="flex justify-center items-center fixed inset-0 bg-slate-700/80 ">
            <video ref={ref} className="max-w-md" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Dashboard
