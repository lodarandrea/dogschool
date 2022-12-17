import { ChangeEventHandler, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import InstructorCard from '../Components/InstructorCard'
import { search } from '../Components/InstructorsSlice'
import { useAppDispatch, useAppSelector } from '../Hooks'

function SearchBar() {
  const searchDispatch = useAppDispatch()
  const handleSubmit = (e: FormEvent<HTMLInputElement>) => e.preventDefault()
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    searchDispatch(search(e.target.value))
  }
  const searchText = useAppSelector((state) => state.instructor.searchText)

  return (
    <div className="mx-8 my-3 p-1">
      <input
        className="px-5 text-lg  font-semibold text-white bg-slate-500 block"
        type="text"
        value={searchText}
        placeholder="Search"
        onSubmit={handleSubmit}
        onChange={handleChange}
      ></input>
    </div>
  )
}

function Instructors() {
  const instructorsList = useAppSelector(
    (state) => state.instructor.searchResult
  )
  return (
    <div>
      <SearchBar />
      <div>
        {instructorsList.map((instructor) => (
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
