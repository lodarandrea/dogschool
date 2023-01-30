import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
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
    <button
      type="button"
      className="block m-auto text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
      onClick={handleClick}
    >
      Attend
    </button>
  )
}

export default AttendButton
