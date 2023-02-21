import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useMatches } from 'react-router-dom'

function Breadcrumbs() {
  let matches = useMatches()
  let crumbs = matches
    .filter((match) => Boolean((match.handle as any)?.crumb))
    .map((match) => (match.handle as any)?.crumb(match.data))

  return (
    <ol className="text-xs lg:text-base font-medium flex mx-5">
      {crumbs.map((crumb, index) => (
        <li key={index} className="mx-1 flex">
          {index > 0 ? (
            <ChevronRightIcon className="w-4 lg:w-5 text-neutral-500 mx-1" />
          ) : null}

          {crumb}
        </li>
      ))}
    </ol>
  )
}

export default Breadcrumbs
