import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../../actions/userActions'
import styles from './Navigation.module.css'

const Navigation = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, user } = useSelector((state) => state.user)

  const handleSignOut = (event) => {
    event.preventDefault()
    dispatch(signOut())
  }

  return (
    <div>
      {!isLoggedIn && (
        <Link className={styles.mainNavItem} to="/sign-in">
          <i className="fa fa-user-circle"></i>
          <span className={styles.mainNavItemText}>Sign In</span>
        </Link>
      )}
      {isLoggedIn && (
        <>
          <Link className={styles.mainNavItem} to="/user">
            <span className={styles.mainNavItemIcon}>
              <i className="fa fa-user-circle"></i>
            </span>
            {user?.firstName}
          </Link>
          <Link className={styles.mainNavItem} to="/" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            <span className={styles.mainNavItemText}> Sign Out</span>
          </Link>
        </>
      )}
    </div>
  )
}

export default Navigation
