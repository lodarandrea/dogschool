import { XCircleIcon } from '@heroicons/react/24/outline'
import { Increment } from '../Store/CreditSlice'
import { useAppDispatch, useAppSelector } from '../Store/Hooks'

function AddCredit(props: { setPopUp: (value: boolean) => void }) {
  const credit = useAppSelector((state) => state.credit.value)
  const dispatcher = useAppDispatch()

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-neutral-800/80 ">
      <div className="bg-white w-11/12 lg:w-1/2">
        <div className="flex flex-col justify-center">
          <button
            onClick={() => props.setPopUp(false)}
            className="flex justify-end mx-4 my-2"
          >
            <XCircleIcon className="w-6" />
          </button>
          <div className="text font-medium">Credit: {credit}</div>
          <div className="my-5 lg:my-10 flex flex-col justify-center md:flex-row">
            <button
              onClick={() => dispatcher(Increment(10))}
              className="buttons text-xs lg:text-base my-2 w-40 mx-5"
            >
              Add 10 credit
            </button>
            <button
              onClick={() => dispatcher(Increment(25))}
              className="buttons text-xs lg:text-base my-2 w-40 mx-5"
            >
              Add 25 credit
            </button>
            <button
              onClick={() => dispatcher(Increment(50))}
              className="buttons text-xs lg:text-base my-2 w-40 mx-5"
            >
              Add 50 credit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCredit
