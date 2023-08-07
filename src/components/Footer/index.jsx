import React from 'react'
import styles from './Footer.module.css'

/**
 * A component that represents the footer of the application.
 * It displays a copyright notice for Argent Bank.
 *
 * @component
 * @returns {React.ReactNode} The rendered footer with the copyright notice.
 */

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>Copyright {currentYear} Argent Bank</p>
    </footer>
  )
}

export default Footer
