import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Login.module.css'

/**
 * A component that provides a login form for users to input their username and password.
 *
 * @component
 * @param {Object} props
 * @param {function} props.handleLogin - Callback function to handle the login process.
 * Receives two parameters: the inputted username and password.
 * @returns {React.ReactNode} The rendered login form.
 */

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(username, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.inputRemember}>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className={styles.signInButton} type="submit">
        Sign In
      </button>
    </form>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

export default LoginForm
