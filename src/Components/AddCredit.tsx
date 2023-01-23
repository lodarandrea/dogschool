import { XCircleIcon } from '@heroicons/react/24/outline'
import { Increment10, Increment25, Increment50 } from '../Store/CreditSlice'
import { useAppDispatch, useAppSelector } from '../Store/Hooks'

function AddCredit(props: {
  setPopUp: (value: (open: boolean) => boolean) => void
}) {
  const credit = useAppSelector((state) => state.credit.value)
  const dispatcher = useAppDispatch()

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-slate-700/80 ">
      <div className="bg-white">
        <div className="float-right m-3">
          <button
            onClick={() => props.setPopUp((open) => !open)}
            className="float-right"
          >
            <XCircleIcon className="w-6" />
          </button>
          <div className="text-lg font-medium mt-5 text-center">
            Credit: {credit}
          </div>
          <div className="my-5">
            <button
              onClick={() => dispatcher(Increment10())}
              className=" text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
            >
              Add 10 credit
            </button>
            <button
              onClick={() => dispatcher(Increment25())}
              className=" text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
            >
              Add 25 credit
            </button>
            <button
              onClick={() => dispatcher(Increment50())}
              className="text-lg font-semibold rounded-lg border-2 bg-slate-500 text-white active:translate-y-1 transform transition px-5 py-3"
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
