import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import SearchBar from '../Components/SearchBar'

export interface Instructor {
  id: number
  name: string
  description: string
  trainingType: number
  trainingTypeName: string
}

interface TrainingType {
  id: number
  name: string
}

function Instructors() {
  const [instructorsList, setInstructorsList] = useState<Array<Instructor>>([])
  const [search, setSearch] = useState('')
  const [value, setValue] = useState('')
  const [instructorTrainingTypes, setInstructorTrainingTypes] = useState<
    Array<TrainingType>
  >([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DATABASE_URL}/training-types`)
      .then((response) => response.json())
      .then((trainingTypes: Array<TrainingType>) => {
        setInstructorTrainingTypes(trainingTypes)
      })
  }, [])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DATABASE_URL}/instructors`)
      .then((response) => response.json())
      .then((data: Array<Instructor>) => {
        let instructors = data.map((i) => ({
          ...i,
          trainingTypeName:
            instructorTrainingTypes.find(
              ({ id, name }) => id === i.trainingType
            )?.name ?? i.trainingType.toString(),
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
    <div>
      <div className="flex justify-center ">
        <SearchBar setSearch={setSearch} />
        <select
          className="rounded-full"
          name="role"
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">Roles</option>
          {instructorTrainingTypes.map((trainingType) => (
            <option value={trainingType.id} key={trainingType.id}>
              {trainingType.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {handleFilter.map((instructor) => (
          <div className="contentItems" key={instructor.id}>
            <Link to={`/instructors/${instructor.id}`}>
              <Card
                imgSrc={`${process.env.REACT_APP_DATABASE_URL}/instructors/1/picture`}
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
