import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import authService from '../services/auth.service'
import Layout from '../components/Layout/Layout'

function Register() {
  const history = useHistory()
  const [error, setError] = useState()
  const onSubmit = async ({ login, password }) => {
    // TODO call register from authService.
    // Use history.replace to login page if register successes
    // and set error state if error
  }

  return (
    <Layout>
      <LoginForm onSubmit={onSubmit} buttonText="Register" title="Create account" error={error} />
    </Layout>
  )
}

export default Register
