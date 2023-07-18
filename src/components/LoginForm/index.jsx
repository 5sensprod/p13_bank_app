import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess, setUserProfile } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'

import styles from './Login.module.css'

const Login = () => {
  const dispatch = useDispatch() // Récupére la fonction dispatch de Redux
  const navigate = useNavigate()
  const [username, setUsername] = useState('') // Initialise l'état pour le nom d'utilisateur
  const [password, setPassword] = useState('') // Initialise l'état pour le mot de passe

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password }),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.body.token) // Stocke le token dans localStorage
        // console.log('Login response:', data)
        dispatch(loginSuccess(data.body)) // Envoye l'objet user au reducer

        // Après la connexion réussie, appeler l'API de profil
        // console.log('Bearer ' + data.body.token)
        const profileResponse = await fetch(
          'http://localhost:3001/api/v1/user/profile',
          {
            method: 'POST', // change from 'GET' to 'POST'
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${data.body.token}`,
            },
            // body: JSON.stringify({
            //   /* You may need to send some data here, depending on the API */
            // }),
          },
        )

        if (profileResponse.ok) {
          const profileData = await profileResponse.json()
          dispatch(setUserProfile(profileData.body)) // Envoyez les données du profil à Redux
          // console.log('Profile response:', profileData)
          navigate('/user')
        } else {
          throw new Error(
            'Erreur lors de la récupération du profil utilisateur',
          )
        }
      } else {
        throw new Error('Erreur de connexion : ' + response.status)
      }
    } catch (error) {
      console.log('Erreur spécifique :', error)
      console.log(
        'Erreur générale lors de la récupération du profil utilisateur',
      )
    }
  }
  return (
    <section className={styles.signInContent}>
      <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        {' '}
        {/* Ajoute un gestionnaire d'événements onSubmit */}
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Mettre à jour l'état lorsque l'utilisateur saisit quelque chose
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Met à jour l'état lorsque l'utilisateur saisit quelque chose
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
    </section>
  )
}

export default Login
