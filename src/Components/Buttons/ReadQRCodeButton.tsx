import { QrCodeIcon } from '@heroicons/react/24/outline'

function ReadQRCodeButton(props: {
  setCamera: (value: (camera: boolean) => boolean) => void
}) {
  return (
    <div className="text-xs font-bold p-5 text-center active:translate-y-1 transform transition;">
      <button
        onClick={() => props.setCamera((camera) => !camera)}
        // className="p-2 bg-turquoise-200 text-turquoise-900 shadow-inner shadow-neutral-200 rounded-xl"
        className="mx-5 my-9 group relative px-5 py-2.5 inline-block shadow-inner bg-turquoise-100 rounded-xs text-turquoise-900 font-medium tracking-wide active:top-0.5 active:outline-none focus:outline-none"
      >
        <span className="block translate-3d-14 group-hover:translate-3d-h-14">
          <QrCodeIcon className="w-9 inline" />
          Read QR Code
        </span>
        <span
          className="absolute -bottom-1 -top-1 -right-1 w-1 bg-gradient-to-br from-turquoise-400 to-turquoise-800 scale-3d-101 transition-transform delay-20 duration-200 origin-top group-hover:scale-3d-111 group-hover:delay-100 group-hover:duration-200 group-hover:origin-bottom"
          aria-hidden="true"
        />
        {/* Top line */}
        <span
          className="absolute -top-1 -left-1 -right-1 h-1 bg-gradient-to-br from-turquoise-400 to-turquoise-800 scale-3d-011 transition-transform delay-200 duration-150 ease-linear origin-left group-hover:scale-3d-111 group-hover:delay-200 group-hover:duration-150 group-hover:origin-right"
          aria-hidden="true"
        />
        {/* Left line */}
        <span
          className="absolute -bottom-1 -top-1 -left-1 w-1 bg-gradient-to-br from-turquoise-400 to-turquoise-800 scale-3d-101 transition-transform delay-350 duration-150 ease-linear origin-bottom group-hover:scale-3d-111 group-hover:delay-350 group-hover:duration-200 group-hover:origin-top"
          aria-hidden="true"
        />
        {/* Bottom line */}
        <span
          className="absolute -bottom-1 -left-1 -right-1 h-1 bg-gradient-to-br from-turquoise-400 to-turquoise-800 scale-3d-011 transition-transform duration-100 origin-right group-hover:scale-3d-111 group-hover:delay-500 group-hover:duration-500 group-hover:origin-left"
          aria-hidden="true"
        />
        {/* Button ::after */}
        <span
          className="absolute -bottom-1 left-3.5 right-3.5 h-1 bg-gradient-to-br from-turquoise-400 to-turquoise-800 transition-after-14 origin-left group-hover:scale-3d-011 group-hover:-right-1 group-hover:-left-1 group-hover:origin-right group-hover:transition-after-h-14"
          aria-hidden="true"
        />
      </button>
    </div>
  )
}

export default ReadQRCodeButton
