import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <Link className={styles.mainNavLogo} to="/">
      <img
        className={styles.mainNavLogoImage}
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className={styles.srOnly}>Argent Bank</h1>
    </Link>
  )
}

export default Logo
