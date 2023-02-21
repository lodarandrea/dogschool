import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useZxing } from 'react-zxing'
import { myFetch } from '../Services/FetchService'

function QRReader(props: { setCamera: (value: boolean) => void }) {
  const [qrResult, setQrResult] = useState('')
  const { ref } = useZxing({
    paused: !props.setCamera,
    onResult(result) {
      console.log(result)
      setQrResult(result.getText())
      handleFetch()
      props.setCamera(false)
    },
  })

  function handleFetch() {
    myFetch(
      `/customers/1/attend`,
      (data) => {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
        })
      },
      { method: 'PUT' }
    )
  }

  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 bg-neutral-800/80 ">
      <video ref={ref} className="max-w-md" />
    </div>
  )
}

export default QRReader
