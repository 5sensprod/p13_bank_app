import React from 'react'
import PropTypes from 'prop-types'
import styles from './UserProfile.module.css'
import { useNavigate } from 'react-router-dom'

const Account = ({ account }) => {
  const navigate = useNavigate()
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount)
  }
  const handleViewTransactions = () => {
    navigate(`/transactions`, { state: { accountId: account._id } })
  }

  return (
    <section className={styles.account}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>{account.title}</h3>
        <p className={styles.accountAmount}>
          {formatCurrency(account.balance)}
        </p>
        <p className={styles.accountAmountDescription}>{account.description}</p>
      </div>
      <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
        <button
          className={styles.transactionButton}
          onClick={handleViewTransactions}
        >
          View transactions
        </button>
      </div>
    </section>
  )
}

Account.propTypes = {
  account: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
}

export default Account
