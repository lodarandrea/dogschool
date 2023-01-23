import { PlusCircleIcon } from '@heroicons/react/24/outline'

function AddCreditButton(props: {
  setPopUp: (value: (open: boolean) => boolean) => void
}) {
  return (
    <button
      type="button"
      onClick={() => props.setPopUp((open) => !open)}
      className="block m-auto text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
    >
      <PlusCircleIcon className="m-auto w-8" />
      Buy Credits
    </button>
  )
}

export default AddCreditButton
