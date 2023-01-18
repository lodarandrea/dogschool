import { useEffect, useState } from 'react'
import { useZxing } from 'react-zxing'

function ReadQRCodeButton() {
  const [message, setMessage] = useState(null)
  const [camera, setCamera] = useState(true)
  const [qrResult, setQrResult]: any = useState(null)
  const { ref } = useZxing({
    paused: camera,
    onResult(result) {
      console.log(result)
      setQrResult(result.getText())
    },
  })
  useEffect(() => {
    console.log(qrResult)
    if (qrResult) {
      console.log(qrResult)
      fetch(`${process.env.REACT_APP_API_URL}/customers/1/attend`, {
        method: 'PUT',
      })
        .then((response) => response.json())
        .then((data) => setMessage(data.message))
      console.log(qrResult)
    }
  }, [qrResult])
  console.log(message)
  function handleClick() {
    setCamera((c) => !c)
  }
  return (
    <>
      <button onClick={handleClick}>Read QR Code</button>
      <video ref={ref} />
      {message ? window.alert(message) : null}
    </>
  )
}

export default ReadQRCodeButton
