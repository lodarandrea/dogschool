import { QrCodeIcon } from '@heroicons/react/24/outline'
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
      className=" buttons profileButtons"
      onClick={generateQR}
    >
      <p className="profileButtonsText">QR code</p>
      <QrCodeIcon className="buttonsIcon" />
    </button>
  )
}

export default QRCodeButton
