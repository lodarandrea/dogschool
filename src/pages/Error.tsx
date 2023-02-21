import Dog from '../img/dog.png'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorPage(): JSX.Element {
  const error = useRouteError()

  return (
    <div>
      <img src={Dog} alt="dog" className="mx-auto my-16  w-1/4" />
      <h1 className="text-center font-bold text-4xl md:text-6xl my-10">
        WHOOF!
      </h1>
      {isRouteErrorResponse(error) && error.status === 404 ? (
        <div className="flex flex-col items-center lg:text-2xl">
          <h1 className="font-semibold text-3xl md:text-5xl">{error.status}</h1>
          <h2>{error.data.sorry}</h2>
          <p> Page not found!</p>
        </div>
      ) : (
        <div>Sorry something went wrong!</div>
      )}
    </div>
  )
}

export default ErrorPage
