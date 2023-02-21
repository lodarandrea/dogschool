import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { myFetch } from '../Services/FetchService'
import { Instructor } from '../model/Instructors'
import Breadcrumbs from '../Components/BreadCrumb'

function InstructorProfile() {
  const [instructor, setInstructor] = useState<Instructor | undefined>()
  const { instructorId } = useParams()

  useEffect(() => {
    myFetch(`/instructors/${instructorId}`, setInstructor)
  }, [instructorId])

  return instructor ? (
    <>
      <div className="my-4">
        <Breadcrumbs />
      </div>
      <div className="mx-8 my-5 flex flex-col lg:mx-auto">
        <img
          className="profileImg"
          src={`${process.env.REACT_APP_API_URL}/instructors/${instructorId}/picture`}
          alt="instructor"
        />
        <h1 className="text-xl lg:text-2xl text-center mt-1 p-2 font-semibold">
          {instructor.name}
        </h1>
        <h2 className="text text-neutral-500">{instructor.description}</h2>
      </div>
    </>
  ) : null
}

export default InstructorProfile
