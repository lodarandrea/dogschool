interface CardProps {
  title: string
  description: string | number
  imgSrc: string
}

function Card({ title, description, imgSrc }: CardProps) {
  return (
    <div className="flex mx-2 px-2 py-2 items-center justify-start hover:bg-turquoise-400/10 hover:rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
      <div className="group relative px-3 py-1 inline-flex justify-center items-center antialiased overflow-hidden active:top-0.5 focus:outline-none">
        <span className="absolute top-1/2 left-10 w-full opacity-0 transition-all duration-300 ease-in-out transform -translate-x-full -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0">
          Click me!
        </span>
        <img
          src={imgSrc}
          alt="Instructor"
          className="w-24 h-24 rounded-full shadow-inner object-cover object-top transition-all duration-300 ease-in-out transform group-hover:opacity-0 group-hover:translate-x-full group-hover:translate-y-0"
        />
      </div>
      <div className="mx-5">
        <h2 className="text-left text-lg font-semibold">{title}</h2>
        <h3 className="text-left text-sm font-medium text-neutral-500">
          {description}
        </h3>
      </div>
    </div>
  )
}

export default Card
