import styles from './Register.module.sass'
import { useForm } from 'react-hook-form'
import React from 'react'
import AuthService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        AuthService.register(data.Email, data.Password)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })
    };
    const checkErrors = (errors) => {
        return errors.Email ? console.log('Email') :
            errors.Password ? console.log('Password') : null
    }
    const passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$";
    return <div className={styles.reg}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign Up</h2>
            <p>E-mail:</p>
            <input
                type='email'
                placeholder='example@website.com'
                className={styles.field}
                id='Email'
                aria-invalid={errors.Email ? "true" : "false"}
                {...register("Email", { required: true })}
            />
            <p>Password:</p>
            <input
                className={styles.field}
                type='password'
                placeholder='********'
                id='Password'
                aria-invalid={errors.Password ? "true" : "false"}
                pattern={passwordPattern}
                {...register("Password", { required: true })}
            />
            <div className={styles.enter}>
                <button className={styles.button} type="submit" onClick={() => checkErrors(errors)}>
                    Submit
                </button>
            </div >
        </form>
    </div >
}

export default Register