import icon from '../img/icon.png'
import '../App.css'
import { useParams } from 'react-router'

function InstructorProfile() {
  const { instructorId } = useParams()
  return (
    <div className="mx-8 my-3">
      <img
        className="max-w-xs bg-gray-300 p-10 m-auto"
        src={icon}
        alt="instructor"
      />
      <h1 className="p-8 text-2xl text-center">
        Name of the Instructor: {instructorId}
      </h1>
      <h2 className="p-6 text-xl text-center">Description and details</h2>
    </div>
  )
}

export default InstructorProfile
