import React from 'react'
import styles from './UserProfile.module.css'
import { useSelector } from 'react-redux'

const Account = ({ account }) => (
  <section className={styles.account}>
    <div className={styles.accountContentWrapper}>
      <h3 className={styles.accountTitle}>{account.title}</h3>
      <p className={styles.accountAmount}>{account.amount}</p>
      <p className={styles.accountAmountDescription}>{account.description}</p>
    </div>
    <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
      <button className={styles.transactionButton}>View transactions</button>
    </div>
  </section>
)

const UserProfile = () => {
  const { firstName, lastName } = useSelector((state) => state.user.user)
  const userName =
    firstName && lastName ? `${firstName} ${lastName}` : 'Loading...'

  const mockData = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
    },
  ]

  return (
    <>
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {userName}!
        </h1>
        <button className={styles.editButton}>Edit Name</button>
      </div>
      <h2 className={styles.srOnly}>Accounts</h2>
      {mockData.map((account, index) => (
        <Account key={index} account={account} />
      ))}
    </>
  )
}

export default UserProfile
