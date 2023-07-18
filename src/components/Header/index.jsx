import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/argentBankLogo.png'

const Header = ({ isUserLoggedIn, userName }) => (
  <nav className={styles.mainNav}>
    <Link className={styles.mainNavLogo} to="/">
      <img
        className={styles.mainNavLogoImage}
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className={styles.srOnly}>Argent Bank</h1>
    </Link>
    <div>
      {!isUserLoggedIn && (
        <Link className={styles.mainNavItem} to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
      {isUserLoggedIn && (
        <>
          <Link className={styles.mainNavItem} to="/user">
            <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
          <Link className={styles.mainNavItem} to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </>
      )}
    </div>
  </nav>
)

export default Header
