import { useState, useEffect } from 'react'

interface Customer {
  name: string
  dogName: string
}

export function CustomersList() {
  fetch('http://localhost:8080/api/customers').then((response) =>
    response.json()
  )
}

export default Customer
