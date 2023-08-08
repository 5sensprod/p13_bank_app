import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import InputField from './InputField'
import styles from './Login.module.css'
import useValidation from '../hooks/useValidation'

/**
 * LoginForm is a component that presents a form for user authentication.
 * The form collects a username and password, validates the inputs, and
 * upon submission, it uses the passed in handleLogin function to handle
 * the authentication logic.
 *
 * @param {Object} props The component props.
 * @param {function} props.handleLogin The callback function to handle the login process.
 * @returns {React.ReactNode} The rendered login form.
 */
const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { error, validateInputs } = useValidation()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateInputs(username, password)) {
      handleLogin(username, password)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="username"
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={error.includes('Username') ? error : null}
      />

      <InputField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error.includes('Password') ? error : null}
      />

      <div className={styles.inputRemember}>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <Button className={styles.signInButton} type="submit" label="Sign In" />
    </form>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

export default LoginForm
