import styles from './UserProfile.module.css'
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

export default AccountSection
