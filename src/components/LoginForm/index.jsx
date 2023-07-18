// src/components/Login/Login.jsx

import React from 'react'
import styles from './Login.module.css'

const Login = () => {
  return (
    <section className={styles.signInContent}>
      <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
      <h1>Sign In</h1>
      <form>
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.inputRemember}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className={styles.signInButton}>Sign In</button>
      </form>
    </section>
  )
}

export default Login
