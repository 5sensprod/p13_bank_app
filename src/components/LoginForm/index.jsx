import React from 'react'
import { useDispatch } from 'react-redux'
import { authenticateAndFetchProfile } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import styles from './Login.module.css'

/**
 * A component that provides an interface for user authentication.
 * It presents a login form, handles the authentication process,
 * fetches the user profile upon successful authentication, and navigates to the user's profile page.
 *
 * @component
 * @returns {React.ReactNode} The rendered login interface, including the login form.
 */

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (username, password) => {
    try {
      const isSuccess = await dispatch(
        authenticateAndFetchProfile(username, password),
      )
      if (isSuccess) {
        navigate('/user')
      } else {
        console.log(
          "Erreur lors de l'authentification ou de la récupération du profil.",
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={styles.signInContent}>
      <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
      <h1>Sign In</h1>
      <LoginForm handleLogin={handleLogin} />
    </section>
  )
}

export default Login
