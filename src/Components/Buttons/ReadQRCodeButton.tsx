import { useState } from 'react'
import { useZxing } from 'react-zxing'

function ReadQRCodeButton() {
  const [message, setMessage] = useState({})
  const [camera, setCamera] = useState(false)
  const { ref } = useZxing({
    paused: camera,
    onResult(result) {
      console.log(result)
      fetch(`${process.env.REACT_APP_API_URL}/customers/1/attend`, {
        method: 'PUT',
      })
        .then((response) => response.json())
        .then((data) => setMessage(data))
    },
  })

  return (
    <div>
      <button onClick={() => setCamera((c) => !c)}>Read QR Code</button>
      <video ref={ref} />
    </div>
  )
}

export default ReadQRCodeButton
