interface Customer {
  id: number
  name: string
  dog: string
  imageUrl?: string
}

export const customersList: Array<Customer> = [
  {
    id: 1,
    name: 'Beki',
    dog: 'Black',
  },
  {
    id: 2,
    name: 'Marcsi',
    dog: 'Max',
  },
  {
    id: 3,
    name: 'Dani',
    dog: 'Dollar',
  },
]

export default Customer
