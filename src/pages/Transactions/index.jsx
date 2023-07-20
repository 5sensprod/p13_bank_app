import React from 'react'
import styles from './Transactions.module.css'
import { useLocation } from 'react-router-dom'
import TransactionList from '../../components/TransactionList' // N'oubliez pas d'importer TransactionList si ce n'est pas déjà fait

const Transactions = () => {
  const location = useLocation()
  const accountId = location.state?.accountId

  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <h2>Liste des transactions</h2>
      <TransactionList accountId={accountId} />{' '}
      {/* Passez l'accountId au composant TransactionList */}
    </main>
  )
}

export default Transactions
