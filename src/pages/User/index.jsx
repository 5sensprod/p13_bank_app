import React from 'react'
import styles from './User.module.css'
import UserProfile from '../../components/UserProfile'

const User = ({ userName }) => (
  <main className={`${styles.main} ${styles.bgDark}`}>
    <UserProfile userName={userName} />
  </main>
)

export default User
