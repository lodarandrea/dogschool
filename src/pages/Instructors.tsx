import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { myFetch } from '../Services/FetchService'
import SearchBar from '../Components/SearchBar'
import { Instructor, TrainingType } from '../model/Instructors'

function Instructors() {
  const [instructorsList, setInstructorsList] = useState<Array<Instructor>>([])
  const [search, setSearch] = useState('')
  const [value, setValue] = useState('')
  const [instructorTrainingTypes, setInstructorTrainingTypes] = useState<
    Array<TrainingType>
  >([])

  useEffect(() => {
    myFetch('/training-types', setInstructorTrainingTypes)
  }, [])

  useEffect(() => {
    myFetch('/instructors', (data: Array<Instructor>) => {
      let instructors = data.map((i) => ({
        ...i,
        trainingTypeName:
          instructorTrainingTypes.find(({ id, name }) => id === i.trainingType)
            ?.name ?? i.trainingType.toString(),
      }))
      setInstructorsList(instructors)
    })
  }, [instructorTrainingTypes])

  const handleFilter = instructorsList.filter((instructor) => {
    return (
      (instructor.name.toLowerCase().includes(search.toLowerCase()) ||
        instructor.trainingTypeName
          .toLowerCase()
          .includes(search.toLowerCase())) &&
      (value ? instructor.trainingType.toString() === value : true)
    )
  })

  return (
    <div data-testid="instList">
      <div className="flex justify-center">
        <SearchBar setSearch={setSearch} />
        <select
          className="rounded-full"
          name="role"
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">Roles</option>
          {instructorTrainingTypes.map((trainingType) => (
            <option key={trainingType.id} value={trainingType.id}>
              {trainingType.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {handleFilter.map((instructor) => (
          <div role="listitem" key={instructor.id} className="contentItems">
            <Link to={`/instructors/${instructor.id}`}>
              <Card
                imgSrc={`${process.env.REACT_APP_API_URL}/instructors/${instructor.id}/picture`}
                title={instructor.name}
                subTitleLabel={'Role:'}
                description={instructor.trainingTypeName}
              ></Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Instructors
