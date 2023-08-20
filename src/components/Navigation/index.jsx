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
 * Composant pour la navigation.
 *
 * Affiche les liens de navigation selon que l'utilisateur est connecté ou non.
 * Lorsqu'un utilisateur est connecté, il voit son nom et a la possibilité de se déconnecter.
 * Sinon, il voit un lien pour se connecter.
 *
 * @component
 *
 * @example
 * return <Navigation />
 */
const Navigation = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  /**
   * Gère la déconnexion de l'utilisateur.
   *
   * @function
   * @param {Event} event - L'événement de clic.
   */
  const handleSignOut = (event) => {
    event.preventDefault()
    dispatch(signOut())
  }

  const renderSignInLink = () => (
    <NavigationLink
      to="/sign-in"
      icon={ICON_CLASSES.userCircle}
      text="Sign In"
      iconClassName={styles.signInIcon}
      textClassName={styles.signInText}
    />
  )

  const renderUserLinks = () => (
    <>
      <NavigationLink
        to="/user"
        iconElement={
          <span className={styles.userIconContainer}>
            <i className={`${ICON_CLASSES.userCircle} ${styles.userIcon}`}></i>
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
  )

  return (
    <div className={styles.mainNavItemContainer}>
      {isLoggedIn ? renderUserLinks() : renderSignInLink()}
    </div>
  )
}

export default Navigation
