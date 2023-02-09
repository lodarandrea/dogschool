import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function SearchBar(props: { setSearch: (value: string) => void }) {
  return (
    <div className="relative w-full" role="search">
      <input
        role={'searchbox'}
        className="block p-2.5 w-full z-20 text-sm bg-neutral-50 rounded-r-lg rounded-l-lg border-2 border-neutral-300 focus:outline-none focus:border-turquoise-700"
        type="text"
        placeholder="Search..."
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-turquoise-700 rounded-r-lg border border-turquoise-900 hover:bg-turquoise-800 "
      >
        <MagnifyingGlassIcon className="w-5" />
      </button>
    </div>
  )
}

export default SearchBar
