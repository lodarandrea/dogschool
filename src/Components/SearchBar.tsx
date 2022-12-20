function SearchBar(props: { setSearch: (value: string) => void }) {
  return (
    <div className=" px-3">
      <input
        className="px-5 text-lg  font-semibold text-white bg-slate-500"
        type="text"
        placeholder="Search..."
        onChange={(e) => props.setSearch(e.target.value)}
      ></input>
    </div>
  )
}

export default SearchBar
