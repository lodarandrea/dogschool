import { XCircleIcon } from '@heroicons/react/24/outline'
import { Increment } from '../Store/CreditSlice'
import { useAppDispatch, useAppSelector } from '../Store/Hooks'

function AddCredit(props: { setPopUp: (value: boolean) => void }) {
  const credit = useAppSelector((state) => state.credit.value)
  const dispatcher = useAppDispatch()

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-neutral-800/80 ">
      <div className="bg-white">
        <div className="float-right m-3">
          <button onClick={() => props.setPopUp(false)} className="float-right">
            <XCircleIcon className="w-6" />
          </button>
          <div className="text font-medium">Credit: {credit}</div>
          <div className="my-5">
            <button
              onClick={() => dispatcher(Increment(10))}
              className="buttons mx-2"
            >
              Add 10 credit
            </button>
            <button
              onClick={() => dispatcher(Increment(25))}
              className="buttons mx-2"
            >
              Add 25 credit
            </button>
            <button
              onClick={() => dispatcher(Increment(50))}
              className="buttons mx-2"
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
