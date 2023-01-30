import React from 'react'

function ShowQrCode(props: {
  setShowQr: (value: boolean) => void
  qr: string
}) {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-slate-700/80 ">
      <div className="bg-white">
        <button
          type="button"
          className="text-lg font-bold"
          onClick={() => props.setShowQr(false)}
        >
          x
        </button>
        <img src={`${props.qr}`} alt="qrCode" className="m-auto" />
      </div>
    </div>
  )
}

export default ShowQrCode
