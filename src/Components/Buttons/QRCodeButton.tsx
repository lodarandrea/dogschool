import { myFetch } from '../../Services/FetchService'

function QRCodeButton(props: {
  setQr: (value: string) => void
  setShowQr: (value: boolean) => void
}) {
  function generateQR() {
    myFetch(`/customers/1/qr-code`, (data: { qrCode: string }) => {
      props.setQr(data.qrCode)
      props.setShowQr(true)
    })
  }

  return (
    <button
      type="button"
      className="block m-auto text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
      onClick={generateQR}
    >
      QR code
    </button>
  )
}

export default QRCodeButton
