import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import SearchBar from '../Components/SearchBar'
import { instructorRoles, instructorsList } from '../model/Instructors'
import icon from '../img/icon.png'

function Instructors() {
  const [filteredInstructorsList, setFilteredInstructorsList] =
    useState(instructorsList)
  const [search, setSearch] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    return setFilteredInstructorsList(
      instructorsList.filter((instructor) => {
        return (
          (instructor.name.toLowerCase().includes(search.toLowerCase()) ||
            instructor.role.toLowerCase().includes(search.toLowerCase())) &&
          instructor.role.includes(value)
        )
      })
    )
  }, [search, value])

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
          {instructorRoles.map((role) => (
            <option value={role}>{role}</option>
          ))}
        </select>
      </div>
      <div>
        {filteredInstructorsList.map((instructor) => (
          <div className="contentItems">
            <Link to={`/instructors/${instructor.id}`}>
              <Card
                imgSrc={icon}
                title={instructor.name}
                subTitleLabel={'Role:'}
                description={instructor.role}
              ></Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Instructors
