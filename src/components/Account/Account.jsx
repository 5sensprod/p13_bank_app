import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import styles from './Account.module.css'
import { useNavigate } from 'react-router-dom'
import { currencyFormatter } from '../../utils/formats.js'

/**
 * A component that renders an individual user account with an option
 * to view its transactions.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.account - The account object to be displayed.
 * @param {string} props.account._id - The unique identifier for the account.
 * @param {string} props.account.title - The title of the account.
 * @param {number} props.account.balance - The balance amount of the account.
 * @param {string} [props.account.description] - An optional description of the account.
 * @returns {React.ReactNode} The rendered account information with a button to navigate to its transactions.
 */

const Account = ({ account }) => {
  const navigate = useNavigate()
  const handleViewTransactions = () => {
    navigate(`/transactions`, { state: { accountId: account._id } })
  }

  return (
    <section className={styles.account}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>{account.title}</h3>
        <p className={styles.accountAmount}>
          {currencyFormatter(account.balance)}
        </p>
        <p className={styles.accountAmountDescription}>{account.description}</p>
      </div>
      <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
        <Button
          className={styles.transactionButton}
          onClick={handleViewTransactions}
          label="View transactions"
        />
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
