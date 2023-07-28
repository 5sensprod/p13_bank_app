import React from 'react'
import { useDispatch } from 'react-redux'
import {
  loginSuccess,
  setUserProfile,
  storeUserCredentials,
} from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import styles from './Login.module.css'
import { authenticateUser } from '../../api/authAPI'
import { fetchUserProfile } from '../../api/profileAPI'

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
      const userData = await authenticateUser(username, password)

      // Stocke les informations d'identification
      dispatch(storeUserCredentials(username, password))
      dispatch(loginSuccess(userData))

      const userProfile = await fetchUserProfile(userData.token)
      dispatch(setUserProfile(userProfile))

      navigate('/user')
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
