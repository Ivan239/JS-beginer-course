import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import authService from '../services/auth.service'
import userService from '../services/user.service'

function Home() {
  // TODO create state for (users, setUsers), (error, setError), (loading, setLoading)
  // try to understand which initial values required

  useEffect(() => {
    if (authService.isAuthorized()) {
      // Run data fetching in this effect
      // TODO set loading state to true


      // TODO call 'userService' to start data fetching, set 'Some error happened' to error state in catch block,
      // set loading state to false in finally block
      // set users state in then block.
      // ---- promise.then((data) => {}).catch((error) => {}).finally(() => {}) ====
    } else {
      // TODO reset users state

    }
  }, [authService.isAuthorized()])

  return (
    <Layout>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {users.map((user) => (
        // TODO extend template to display all data (besides id)
        <div key={user.id}>{user.name}</div>
      ))}
    </Layout>
  )
}

export default Home
