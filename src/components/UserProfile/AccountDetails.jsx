import React from 'react'
import PropTypes from 'prop-types'
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

AccountDetails.propTypes = {
  account: PropTypes.shape({
    title: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
}

export default AccountDetails
