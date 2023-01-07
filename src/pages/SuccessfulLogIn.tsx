import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../Store/Hooks'
import { logIn, Role } from '../Store/UserSlice'

function SuccessfulLogIn() {
  const role = useAppSelector((state) => state.user.auth0User?.role)
  const navigate = useNavigate()
  const { user, isLoading, isAuthenticated } = useAuth0()
  const dispatcher = useAppDispatch()

  useEffect(() => {
    console.log(user, isAuthenticated, isLoading)
    if (isLoading) {
      return
    }
    if (!isAuthenticated) {
      navigate('/')
      return
    }
    if (user) {
      dispatcher(
        logIn({
          name: user.nickname || user.email || 'John Doe',
          email: user.email,
        })
      )
    }
  }, [user, dispatcher, isAuthenticated, isLoading, navigate])

  useEffect(() => {
    if (role !== undefined && role !== null) {
      role === Role.Instructor
        ? navigate('/dashboard')
        : navigate('/customerme')
    }
  }, [navigate, role])

  return <div>Successful LogIn</div>
}

export default SuccessfulLogIn
