function SearchBar(props: { setSearch: (value: string) => void }) {
  return (
    <div className="mx-8 my-3 p-1">
      <input
        className="px-5 text-lg  font-semibold text-white bg-slate-500 block"
        type="text"
        placeholder="Search"
        onChange={(e) => props.setSearch(e.target.value)}
      ></input>
    </div>
  )
}

export default SearchBar
