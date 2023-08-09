import React from 'react'
import useAuthentication from '../hooks/useAuthentication'
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
  const { authenticate, error } = useAuthentication()

  return (
    <section className={styles.signInContent}>
      <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
      <h1>Sign In</h1>

      {/* Display error if any */}
      {error && <div className={styles.errorNotification}>{error}</div>}

      <LoginForm handleLogin={authenticate} />
    </section>
  )
}

export default Login
