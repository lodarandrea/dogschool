import { useZxing } from 'react-zxing'

function QRReader(props: {
  setQrResult: (value: string) => void
  setCamera: (value: boolean) => void
}) {
  const { ref } = useZxing({
    paused: !props.setCamera,
    onResult(result) {
      console.log(result)
      props.setQrResult(result.getText())
      props.setCamera(false)
    },
  })

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-slate-700/80 ">
      <video ref={ref} className="max-w-md" />
    </div>
  )
}

export default QRReader
