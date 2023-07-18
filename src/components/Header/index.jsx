// src/components/Header/index.js

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOut } from '../../actions/userActions'
import styles from './Header.module.css'
import logo from '../../assets/argentBankLogo.png'

const Header = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, user } = useSelector((state) => state.user)

  const handleSignOut = (event) => {
    event.preventDefault()
    dispatch(signOut())
  }
  return (
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
        {!isLoggedIn && (
          <Link className={styles.mainNavItem} to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
        {isLoggedIn && (
          <>
            <Link className={styles.mainNavItem} to="/user">
              <i className="fa fa-user-circle"></i>
              {user?.firstName} {/* Affichez le prénom de l'utilisateur ici */}
            </Link>
            <Link className={styles.mainNavItem} to="/" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Header
