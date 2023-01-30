import { QrCodeIcon } from '@heroicons/react/24/outline'

function ReadQRCodeButton(props: {
  setCamera: (value: (camera: boolean) => boolean) => void
}) {
  return (
    <div className=" text-xs font-semibold p-5 text-center active:translate-y-1 transform transition;">
      <button onClick={() => props.setCamera((camera) => !camera)}>
        <QrCodeIcon className="w-9 m-auto" />
        Read QR Code
      </button>
    </div>
  )
}

export default ReadQRCodeButton
