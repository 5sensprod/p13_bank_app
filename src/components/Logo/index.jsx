import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import styles from './Logo.module.css'

/**
 * Logo component for Argent Bank. When clicked, it redirects users
 * to the homepage. The component displays the Argent Bank logo
 * as an image and has an associated hidden text for accessibility.
 *
 * @component
 * @returns {React.ReactNode} The rendered Argent Bank logo with a link to the homepage.
 */

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
