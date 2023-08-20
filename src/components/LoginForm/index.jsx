import React, { useState } from 'react'
import styles from './Login.module.css'
import LoginForm from './LoginForm'
import useAuthentication from '../hooks/useAuthentication'
import useLoginValidation from '../hooks/useLoginValidation'

/**
 * Login est un composant qui fournit une interface pour l'authentification des utilisateurs.
 * Il affiche un formulaire de connexion et gère le processus d'authentification.
 * Le composant utilise deux hooks personnalisés : `useAuthentication` pour gérer l'authentification
 * et `useLoginValidation` pour valider les entrées de l'utilisateur avant de tenter de s'authentifier.
 *
 * Le processus de validation et d'authentification est déclenché lorsqu'un utilisateur soumet le formulaire de connexion.
 *
 * @component
 *
 * @example
 * <Login />
 *
 * @returns {React.ReactNode} L'interface de connexion rendue, comprenant le formulaire de connexion.
 */
const Login = () => {
  const { authenticate, error: authError } = useAuthentication()
  const { error: validationError, validateInputs } = useLoginValidation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (validateInputs(username, password)) {
      authenticate(username, password)
    }
  }

  return (
    <section className={styles.signInContent}>
      <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
      <h1>Sign In</h1>

      {/* Combine and display errors from validation and authentication */}
      {(validationError || authError) && (
        <div className={styles.errorNotification}>
          {validationError || authError}
        </div>
      )}

      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </section>
  )
}

export default Login
