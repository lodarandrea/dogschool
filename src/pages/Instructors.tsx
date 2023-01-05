import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import SearchBar from '../Components/SearchBar'

export interface instructorPayload {
  id: number
  name: string
  description: string
  trainingType: number
}

interface instructor {
  id: number
  name: string
  trainingType: string
}

interface trainingType {
  id: number
  name: string
}

function Instructors() {
  const [instructorsList, setInstructorsList] = useState<Array<instructor>>([])
  const [filteredInstructorsList, setFilteredInstructorsList] =
    useState(instructorsList)
  const [search, setSearch] = useState('')
  const [value, setValue] = useState('')
  const [instructorTrainingTypes, setInstructorTrainingTypes] = useState<
    Array<trainingType>
  >([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DATABASE_URL}/training-types`)
      .then((response) => response.json())
      .then((trainingTypes: Array<trainingType>) => {
        setInstructorTrainingTypes(trainingTypes)
      })
  }, [])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DATABASE_URL}/instructors`)
      .then((response) => response.json())
      .then((data: Array<instructorPayload>) => {
        let instructors = data.map((i) => ({
          ...i,
          trainingType:
            instructorTrainingTypes.find(
              ({ id, name }) => id === i.trainingType
            )?.name ?? i.trainingType.toString(),
        }))
        setInstructorsList(instructors)
      })
  }, [instructorTrainingTypes])

  useEffect(() => {
    return setFilteredInstructorsList(
      instructorsList.filter((instructor) => {
        return (
          (instructor.name.toLowerCase().includes(search.toLowerCase()) ||
            instructor.trainingType
              .toLowerCase()
              .includes(search.toLowerCase())) &&
          instructor.trainingType.includes(value)
        )
      })
    )
  }, [instructorsList, search, value])

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
            <option value={trainingType.id}>{trainingType.name}</option>
          ))}
        </select>
      </div>
      <div>
        {filteredInstructorsList.map((instructor) => (
          <div className="contentItems">
            <Link to={`/instructors/${instructor.id}`}>
              <Card
                imgSrc={`${process.env.REACT_APP_DATABASE_URL}/instructors/1/picture`}
                title={instructor.name}
                subTitleLabel={'Role:'}
                description={instructor.trainingType}
              ></Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Instructors
