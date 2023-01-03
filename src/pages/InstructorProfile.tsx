import { useEffect, useState } from 'react'
import { instructorPayload } from './Instructors'

function InstructorProfile() {
  const [instructor, setInstructor] = useState<instructorPayload | undefined>()

  useEffect(() => {
    fetch('http://localhost:8080/api/instructors/1')
      .then((response) => response.json())
      .then((data) => setInstructor(data))
  }, [])

  return instructor ? (
    <div className="mx-8 my-3">
      <img
        className="w-56 bg-gray-300 p-1 m-auto"
        src="http://localhost:8080/api/instructors/1/picture"
        alt="instructor"
      />
      <h1 className="p-8 text-2xl text-center">{instructor.name}</h1>
      <h2 className="p-6 text-xl text-center">{instructor.description}</h2>
    </div>
  ) : null
}

export default InstructorProfile
