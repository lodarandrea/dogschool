import icon from '../img/icon.png'
import Instructors from '../model/Instructors'

interface InstructorCardProps {
  instructor: Instructors
}

function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <img
        src={icon}
        alt="Customer"
        className="bg-slate-50 w-28 p-3 rounded-full row-span-2"
      />
      <h2 className="col-span-2 text-left">Name: {instructor.name}</h2>
      <h3 className="col-span-2 text-left">Role: {instructor.role}</h3>
    </div>
  )
}

export default InstructorCard
