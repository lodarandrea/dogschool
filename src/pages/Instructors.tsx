import { Link } from 'react-router-dom'

function Instructors() {
  return (
    <div>
      <div className="contentItems">
        <Link to="/instructors">Instructor1</Link>
      </div>
      <div className="contentItems">
        <Link to="/instructors">Instructor2</Link>
      </div>
      <div className="contentItems">
        <Link to="/instructors">Instructor3</Link>
      </div>
    </div>
  )
}

export default Instructors
