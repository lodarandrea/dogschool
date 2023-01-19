import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function AttendButton() {
  const [message, setMessage] = useState('')
  const { customerId } = useParams()
  const customId = 'custom-id-yes'

  function handleClick() {
    fetch(`${process.env.REACT_APP_API_URL}/customers/${customerId}/attend`, {
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message)
        setMessage(data.message)
      })
  }

  if (message) {
    toast.success(message, {
      toastId: customId,
      position: toast.POSITION.TOP_CENTER,
    })
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
