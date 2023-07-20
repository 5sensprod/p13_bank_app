import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AccountSection from './AccountSection'
import { updateUserProfile } from '../../actions/userActions'
import styles from './UserProfile.module.css'
import NameEditor from './NameEditor'
import useTransactions from '../../hooks/useTransactions'

const UserProfile = () => {
  const dispatch = useDispatch()
  const { firstName, lastName } = useSelector((state) => state.user.user)
  const [editMode, setEditMode] = useState(false)
  const [newFirstName, setNewFirstName] = useState(firstName)
  const [newLastName, setNewLastName] = useState(lastName)

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleSave = (firstName, lastName) => {
    dispatch(updateUserProfile({ firstName, lastName }))
    setEditMode(false)
  }

  const handleCancel = () => {
    setNewFirstName(firstName)
    setNewLastName(lastName)
    setEditMode(false)
  }

  const userName =
    firstName && lastName ? `${firstName} ${lastName}` : 'Loading...'

  const { transactions, loading, error } = useTransactions()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading transactions.</div>
  }

  return (
    <>
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {userName}!
        </h1>
        {editMode ? (
          <NameEditor
            initialFirstName={newFirstName}
            initialLastName={newLastName}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <button className={styles.editButton} onClick={handleEdit}>
            Edit Name
          </button>
        )}
      </div>
      <AccountSection accounts={transactions} />
    </>
  )
}

export default UserProfile
