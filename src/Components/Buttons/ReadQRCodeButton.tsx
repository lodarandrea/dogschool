import { QrCodeIcon } from '@heroicons/react/24/outline'

function ReadQRCodeButton(props: {
  setCamera: (value: (camera: boolean) => boolean) => void
}) {
  return (
    <div className="text-xs font-bold p-5 text-center active:translate-y-1 transform transition;">
      <button
        onClick={() => props.setCamera((camera) => !camera)}
        className="p-2 bg-turquoise-200 text-turquoise-900 shadow-inner shadow-neutral-200 rounded-xl"
        // className=" text-turquoise-900"
      >
        <QrCodeIcon className="w-9 inline" />
        Read QR Code
      </button>
    </div>
  )
}

export default ReadQRCodeButton
