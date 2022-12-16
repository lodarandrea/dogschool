import '../App.css'

function AttendButton() {
  return (
    <div className="">
      <button
        type="button"
        className="block m-auto text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
      >
        Attend
      </button>
    </div>
  )
}

export default AttendButton
