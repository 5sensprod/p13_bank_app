import React from 'react'
import styles from './Login.module.css'
import LoginForm from '../../components/LoginForm'

const Login = () => (
  <main className={`${styles.main} ${styles.bgDark}`}>
    <LoginForm />
  </main>
)

export default Login
