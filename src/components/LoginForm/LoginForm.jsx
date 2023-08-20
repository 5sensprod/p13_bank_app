import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import InputField from './InputField'
import styles from './Login.module.css'

/**
 * LoginForm est un composant de présentation qui affiche un formulaire pour l'authentification utilisateur.
 * Le formulaire récupère un nom d'utilisateur et un mot de passe, puis soumet les données fournies en utilisant la prop handleLogin.
 *
 * @component
 * @param {Object} props
 * @param {string} props.username - La valeur actuelle du champ d'entrée du nom d'utilisateur.
 * @param {Function} props.setUsername - La fonction pour mettre à jour la valeur du champ d'entrée du nom d'utilisateur.
 * @param {string} props.password - La valeur actuelle du champ d'entrée du mot de passe.
 * @param {Function} props.setPassword - La fonction pour mettre à jour la valeur du champ d'entrée du mot de passe.
 * @param {Function} props.handleLogin - La fonction à appeler lorsque le formulaire est soumis.
 *
 * @example
 * <LoginForm
 *   username="jean.dupont"
 *   setUsername={fonctionMiseAJourUsername}
 *   password="motdepasse123"
 *   setPassword={fonctionMiseAJourMotDePasse}
 *   handleLogin={fonctionSoumission}
 * />
 *
 * @returns {React.ReactNode}
 */
const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleLogin()
      }}
    >
      <InputField
        id="username"
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <InputField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
}

export default LoginForm
