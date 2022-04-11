import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass'
import logo from '../../assets/Logo'
import authService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log(authService.isAuthorized())
        navigate('/')
        authService.logout()
    }

    return <div className={styles.header}>
        <NavLink to='/' className={styles.title}>
            <h2>Homework 2</h2>
        </NavLink>
        <img src={logo} alt='sass' className={styles.logo} />
        {!authService.isAuthorized() ? (
            <div className={styles.buttons}>
                <NavLink to='/login' className={styles.button} id={styles.login}>
                    Login
                </NavLink>
                <NavLink to='/register' className={styles.button} id={styles.register}>
                    Register
                </NavLink>
            </div>)
            : (
                <div className={styles.buttons}>
                    <div onClick={handleLogout} className={styles.button}>
                        Logout
                    </div>
                </div>
            )}
    </div>
}

export default Header