import React from 'react'
import PropTypes from 'prop-types'
import styles from './Account.module.css'
import { currencyFormatter } from '../../utils/formats.js'

/**
 * A component that renders detailed information about a user's account.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.account - The account object to be displayed.
 * @param {string} props.account.title - The title of the account.
 * @param {number} props.account.balance - The balance amount of the account.
 * @param {string} [props.account.description] - An optional description of the account.
 * @returns {React.ReactNode} The rendered account details.
 */

const AccountDetails = ({ account }) => {
  return (
    <section className={styles.accountDetail}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>{account.title}</h3>
        <p className={styles.accountAmount}>
          {currencyFormatter(account.balance)}
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
