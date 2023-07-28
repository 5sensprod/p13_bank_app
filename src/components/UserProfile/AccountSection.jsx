import styles from './UserProfile.module.css'
import PropTypes from 'prop-types'
import Account from './Account'

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
