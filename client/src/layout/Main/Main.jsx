import React, { useEffect, useState } from 'react'
import authService from '../../services/auth.service'
import userService from '../../services/user.service'
import emptyProfile from '../../assets/emptyProfile'

function Main() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        if (authService.isAuthorized()) {
            setLoading(true)
            userService.getUsers()
                .then((data) => {
                    setUsers(data)
                }).catch((error) => {
                    console.log(error)
                    setError('Error: ', error)
                }).finally(() => {
                    setLoading(false)
                })
        } else {
            setUsers([])
        }
    }, [authService.isAuthorized()])

    return (
        <div>
            {authService.isAuthorized() ? (
                <>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    {users.map((user) => (<div key={user.id}>
                        <div>
                            <img src={/*user.avatar || */emptyProfile} alt="avatar" /> {/*server avatar loadiong not response*/}
                            <div>Name: {user.name}</div>
                            <div>E-mail: {user.email}</div>
                            <div>Addess: {user.address}</div>
                            <br />
                        </div>
                    </div>
                    ))}
                </>
            )
                :
                <p>Sorry, you&apos;re not autorized</p>}
        </div>
    )
}

export default Main