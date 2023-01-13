import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { myFetch } from '../Services/FetchService'
import { Instructor } from '../model/Instructors'

function InstructorProfile() {
  const [instructor, setInstructor] = useState<Instructor | undefined>()
  const { instructorId } = useParams()

  useEffect(() => {
    myFetch(`/instructors/${instructorId}`, setInstructor)
  }, [instructorId])

  return instructor ? (
    <div className="mx-8 my-3">
      <img
        className="w-56 bg-gray-300 p-1 m-auto"
        src={`${process.env.REACT_APP_API_URL}/instructors/${instructorId}/picture`}
        alt="instructor"
      />
      <h1 className="p-8 text-2xl text-center">{instructor.name}</h1>
      <h2 className="p-6 text-xl text-center">{instructor.description}</h2>
    </div>
  ) : null
}

export default InstructorProfile
