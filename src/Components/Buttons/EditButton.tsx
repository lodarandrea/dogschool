import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function EditButton() {
  return (
    <>
      <Link to={'/edit'}>
        <button type="button" className="block mt-8 text-lg buttons">
          Edit
          <PencilSquareIcon className="buttonsIcon" />
        </button>
      </Link>
    </>
  )
}

export default EditButton
