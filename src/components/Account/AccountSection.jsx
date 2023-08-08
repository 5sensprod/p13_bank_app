import styles from './Account.module.css'
import PropTypes from 'prop-types'
import Account from './Account'

/**
 * A component that renders a list of user accounts.
 *
 * @component
 * @param {Object} props
 * @param {Object[]} props.accounts - An array of account objects to be displayed.
 * @param {string} props.accounts[].title - The title of the account.
 * @param {number} props.accounts[].balance - The balance amount of the account.
 * @param {string} [props.accounts[].description] - An optional description of the account.
 * @returns {React.ReactNode} The rendered list of accounts.
 */

const AccountSection = ({ accounts }) => {
  return (
    <>
      <h2 className={styles.srOnly}>Accounts</h2>
      {accounts.map((account, index) => (
        <Account key={index} account={account} />
      ))}
    </>
  )
}

AccountSection.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      description: PropTypes.string,
    }),
  ).isRequired,
}

export default AccountSection
