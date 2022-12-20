interface Instructors {
  id: number
  name: string
  role: string
}

export const instructorsList: Array<Instructors> = [
  {
    id: 1,
    name: 'Juci',
    role: 'kutyatrener',
  },
  {
    id: 2,
    name: 'Rebeka',
    role: 'engedelmes',
  },
  {
    id: 3,
    name: 'Tekla',
    role: 'hoopers',
  },
]

export const instructorRoles = instructorsList.map(
  (instructor) => instructor.role
)

export default Instructors
