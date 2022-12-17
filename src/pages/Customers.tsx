import { Link } from 'react-router-dom'
import CustomerCard from '../Components/CustomerCard'
import '../App.css'
import { useAppDispatch, useAppSelector } from '../Hooks'
import { ChangeEventHandler, FormEvent } from 'react'
import { search } from '../Components/CustomerSlice'

function SearchBar() {
  const searchDispatch = useAppDispatch()
  const searchText = useAppSelector((state) => state.customer.searchText)
  const handleSubmit = (e: FormEvent<HTMLInputElement>) => e.preventDefault()
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    searchDispatch(search(e.target.value))
  }
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

function Customers() {
  const customersList = useAppSelector((state) => state.customer.searchResult)

  return (
    <div>
      <SearchBar />
      <div>
        {customersList.map((customer) => (
          <div className="contentItems">
            <Link to={`/customers/${customer.id}`}>
              <CustomerCard customer={customer} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customers
