import { PlusCircleIcon } from '@heroicons/react/24/outline'

function AddCreditButton(props: { setPopUp: (value: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => props.setPopUp(true)}
      className="mt-8 buttons"
    >
      Buy Credits
      <PlusCircleIcon className="buttonsIcon" />
    </button>
  )
}

export default AddCreditButton
