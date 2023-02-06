import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../App.css'
import { myFetch } from '../../Services/FetchService'

function AttendButton() {
  const [message, setMessage] = useState('')
  const { customerId } = useParams()
  const toastId = 'Toast1'

  function handleClick() {
    myFetch(
      `/customers/${customerId}/attend`,
      (data) => {
        setMessage(data.message)
        toast.success(data.message, {
          toastId,
          position: toast.POSITION.TOP_CENTER,
        })
      },
      { method: 'PUT' }
    )
  }

  return (
    <button type="button" className="block mt-8 buttons" onClick={handleClick}>
      Attend
    </button>
  )
}

export default AttendButton
