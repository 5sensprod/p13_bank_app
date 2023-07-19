import React from 'react'
import styles from './UserProfile.module.css'

const Account = ({ account }) => (
  <section className={styles.account}>
    <div className={styles.accountContentWrapper}>
      <h3 className={styles.accountTitle}>{account.title}</h3>
      <p className={styles.accountAmount}>{account.amount}</p>
      <p className={styles.accountAmountDescription}>{account.description}</p>
    </div>
    <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
      <button className={styles.transactionButton}>View transactions</button>
    </div>
  </section>
)

export default Account
