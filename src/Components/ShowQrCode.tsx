import { XCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

function ShowQrCode(props: {
  setShowQr: (value: boolean) => void
  qr: string
}) {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-neutral-800/80 ">
      <div className="bg-white">
        <button
          type="button"
          onClick={() => props.setShowQr(false)}
          className="float-right m-1"
        >
          <XCircleIcon className="w-6" />
        </button>
        <img src={`${props.qr}`} alt="qrCode" className="mt-5" />
      </div>
    </div>
  )
}

export default ShowQrCode
