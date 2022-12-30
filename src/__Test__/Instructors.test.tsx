import React from 'react'
import {
  render,
  screen,
  fireEvent,
  getByTestId,
  getByDisplayValue,
} from '@testing-library/react'
import Instructors from '../pages/Instructors'
import { MemoryRouter } from 'react-router-dom'

test('SearchBar is rendered', () => {
  const { getByTestId, getByRole } = render(
    <MemoryRouter>
      <Instructors />
    </MemoryRouter>
  )
  const searchElement = screen.getByRole('search')
  expect(searchElement).toBeInTheDocument()
})

test('SearchBar is filtering the list', () => {
  render(
    <MemoryRouter>
      <Instructors />
    </MemoryRouter>
  )
  const searchElement = screen.getByRole('searchbox')
  const listElements = screen.getAllByRole('listitem')
  expect(listElements).toHaveLength(3)
  fireEvent.change(searchElement, { target: { value: 'hoopers' } })
  const listElements2 = screen.getAllByRole('listitem')
  expect(listElements2).toHaveLength(1)
})

test('the right card is displayed when searching ', () => {
  render(
    <MemoryRouter>
      <Instructors />
    </MemoryRouter>
  )
  const searchElement = screen.getByRole('searchbox')
  fireEvent.change(searchElement, { target: { value: 'hoopers' } })
  const listElements = screen.getAllByRole('listitem')
  expect(listElements[0].innerHTML).toContain('hoopers')
})
