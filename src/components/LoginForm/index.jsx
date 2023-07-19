import React from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess, setUserProfile } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import styles from './Login.module.css'
import { authenticateUser } from '../../api/authAPI'
import { fetchUserProfile } from '../../api/profileAPI'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (username, password) => {
    try {
      const userData = await authenticateUser(username, password)

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
