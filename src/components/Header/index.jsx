import React from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.mainNav}>
      <Logo />
      <Navigation />
    </nav>
  )
}

export default Header
