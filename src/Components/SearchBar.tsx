import '../App.css'

function SearchBar() {
  return (
    <div className="mx-8 my-3  bg-slate-500 p-1">
      <input
        className="px-5 text-lg font-semibold text-white bg-slate-500 border-none"
        type="text"
        placeholder="Search"
      ></input>
    </div>
  )
}

export default SearchBar
