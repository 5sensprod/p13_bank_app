import React from 'react'
import styles from './UserProfile.module.css'

const AccountDetails = ({ account }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <section className={styles.accountDetail}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>{account.title}</h3>
        <p className={styles.accountAmount}>
          {formatCurrency(account.balance)}
        </p>
        <p className={styles.accountAmountDescription}>{account.description}</p>
      </div>
    </section>
  )
}

export default AccountDetails
