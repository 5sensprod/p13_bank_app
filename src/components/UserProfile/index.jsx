import React, { useState } from 'react'
import styles from './UserProfile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserProfile } from '../../actions/userActions'

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
  const dispatch = useDispatch()
  const { firstName, lastName } = useSelector((state) => state.user.user)
  const [editMode, setEditMode] = useState(false)
  const [newFirstName, setNewFirstName] = useState(firstName)
  const [newLastName, setNewLastName] = useState(lastName)

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleSave = () => {
    dispatch(
      updateUserProfile({ firstName: newFirstName, lastName: newLastName }),
    )
    setEditMode(false)
  }

  const handleFirstNameChange = (e) => {
    setNewFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setNewLastName(e.target.value)
  }

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
          {editMode ? (
            <>
              <input
                type="text"
                value={newFirstName}
                onChange={handleFirstNameChange}
              />
              <input
                type="text"
                value={newLastName}
                onChange={handleLastNameChange}
              />
            </>
          ) : (
            <>{userName}!</>
          )}
        </h1>
        {editMode ? (
          <button className={styles.editButton} onClick={handleSave}>
            Save Name
          </button>
        ) : (
          <button className={styles.editButton} onClick={handleEdit}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className={styles.srOnly}>Accounts</h2>
      {mockData.map((account, index) => (
        <Account key={index} account={account} />
      ))}
    </>
  )
}

export default UserProfile
