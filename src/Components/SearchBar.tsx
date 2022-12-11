import '../App.css'

function SearchBar() {
  return (
    <div className="mx-8 my-3  bg-gray-300 p-1">
      <input
        className="text-lg text-gray-900 bg-gray-300"
        type="text"
        placeholder="Search"
      ></input>
    </div>
  )
}

export default SearchBar
