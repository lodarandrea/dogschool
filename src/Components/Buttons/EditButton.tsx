import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function EditButton() {
  return (
    <>
      <Link to={'/edit'} className="buttons profileButtons ">
        <p className="profileButtonsText">Edit</p>
        <PencilSquareIcon className="buttonsIcon" />
      </Link>
    </>
  )
}

export default EditButton
