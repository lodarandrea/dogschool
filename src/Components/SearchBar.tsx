import { ChangeEventHandler, FormEvent, FormEventHandler } from 'react'
import '../App.css'
import { useAppDispatch, useAppSelector } from '../Hooks'
import { search } from './CustomerSlice'

function SearchBar() {
  const searchDispatch = useAppDispatch()
  const searchText = useAppSelector((state) => state.customer.searchText)
  const handleSubmit = (e: FormEvent<HTMLInputElement>) => e.preventDefault()
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    searchDispatch(search(e.target.value))
  }
  return (
    <div className="block mx-8 my-3  bg-slate-500 p-1">
      <input
        className="px-5 text-lg font-semibold text-white bg-slate-500 border-none"
        type="text"
        value={searchText}
        placeholder="Search"
        onSubmit={handleSubmit}
        onChange={handleChange}
      ></input>
    </div>
  )
}

export default SearchBar
