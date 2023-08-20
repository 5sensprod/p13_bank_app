import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserName from '../UserName'
import { signOut } from '../../actions/userActions'
import styles from './Navigation.module.css'
import NavigationLink from './NavigationLink'

const ICON_CLASSES = {
  userCircle: 'fa fa-user-circle',
  signOut: 'fa fa-sign-out',
}

/**
 * Navigation component.
 *
 * @component
 *
 * @example
 * return <Navigation />
 */
const Navigation = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  const handleSignOut = (event) => {
    event.preventDefault()
    dispatch(signOut())
  }

  return (
    <div className={styles.mainNavItemContainer}>
      {!isLoggedIn && (
        <NavigationLink
          to="/sign-in"
          icon={ICON_CLASSES.userCircle}
          text="Sign In"
          iconClassName={styles.signInIcon}
          textClassName={styles.signInText}
        />
      )}
      {isLoggedIn && (
        <>
          <NavigationLink
            to="/user"
            iconElement={
              <span className={styles.userIconContainer}>
                <i
                  className={ICON_CLASSES.userCircle + ` ${styles.userIcon}`}
                ></i>
              </span>
            }
            text={<UserName display="first" className={styles.userName} />}
          />
          <NavigationLink
            to="/"
            icon={ICON_CLASSES.signOut}
            text="Sign Out"
            iconClassName={styles.signOutIcon}
            textClassName={styles.signOutText}
            onClick={handleSignOut}
          />
        </>
      )}
    </div>
  )
}

export default Navigation
