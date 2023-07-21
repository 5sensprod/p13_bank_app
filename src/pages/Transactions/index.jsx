import React from 'react'
import styles from './Transactions.module.css'
import { useLocation } from 'react-router-dom'
import TransactionList from '../../components/TransactionList'
import AccountDetails from '../../components/UserProfile/AccountDetails'
import { useSelector } from 'react-redux'

const Transactions = () => {
  const location = useLocation()
  const accountId = location.state?.accountId

  // Utilise useSelector pour obtenir le compte par son ID
  const accounts = useSelector((state) => state.accounts.accounts)
  const account = accounts.find((acc) => acc._id === accountId)

  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <h2 className={styles.srOnly}>Liste des transactions</h2>

      {account && <AccountDetails account={account} />}

      <TransactionList accountId={accountId} />
    </main>
  )
}

export default Transactions
