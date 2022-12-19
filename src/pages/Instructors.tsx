import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import InstructorCard from '../Components/InstructorCard'
import SearchBar from '../Components/SearchBar'
import { instructorsList } from '../model/Instructors'

function Instructors() {
  const [filteredInstructorsList, setFilteredInstructorsList] =
    useState(instructorsList)
  const [search, setSearch] = useState('')

  useEffect(() => {
    return setFilteredInstructorsList(
      instructorsList.filter((instructor) => {
        return (
          instructor.name.toLowerCase().includes(search.toLowerCase()) ||
          instructor.role.toLowerCase().includes(search.toLowerCase())
        )
      })
    )
  }, [search])

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <div>
        {filteredInstructorsList.map((instructor) => (
          <div className="contentItems">
            <Link to={`/instructors/${instructor.id}`}>
              <InstructorCard instructor={instructor} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Instructors
