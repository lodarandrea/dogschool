import { Link } from 'react-router-dom'

function Instructors() {
  return (
    <div>
      <div className="contentItems">
        <Link to="/instuctors">Instructor1</Link>
      </div>
      <div className="contentItems">
        <Link to="/instuctors">Instructor2</Link>
      </div>
      <div className="contentItems">
        <Link to="/instuctors">Instructor3</Link>
      </div>
    </div>
  )
}

export default Instructors
