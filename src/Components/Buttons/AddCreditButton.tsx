import { PlusCircleIcon } from '@heroicons/react/24/outline'

function AddCreditButton(props: { setPopUp: (value: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => props.setPopUp(true)}
      className=" buttons profileButtons"
    >
      <p className="profileButtonsText">Buy Credits</p>
      <PlusCircleIcon className="buttonsIcon" />
    </button>
  )
}

export default AddCreditButton
