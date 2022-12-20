interface CardProps {
  title: string
  subTitleLabel: 'Role:' | 'Dog name:'
  description: string
  imgSrc: string
}

function Card({ title, subTitleLabel, description, imgSrc }: CardProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <img
        src={imgSrc}
        alt="Instructor"
        className="bg-slate-50 w-20 p-3 rounded-full row-span-2"
      />
      <h2 className="col-span-2 text-left text-xl font-bold">Name: {title}</h2>
      <h3 className="col-span-2 text-left text-lg font-semibold">
        {subTitleLabel} {description}
      </h3>
    </div>
  )
}

export default Card
