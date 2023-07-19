import React, { useState, useEffect } from 'react'
import { fetchTransactions } from '../../api/transactionApi'
import { useSelector, useDispatch } from 'react-redux'
import AccountSection from './AccountSection'
import { updateUserProfile } from '../../actions/userActions'
import styles from './UserProfile.module.css'
import NameEditor from './NameEditor'

const UserProfile = () => {
  const dispatch = useDispatch()
  const { firstName, lastName } = useSelector((state) => state.user.user)
  const [editMode, setEditMode] = useState(false)
  const [newFirstName, setNewFirstName] = useState(firstName)
  const [newLastName, setNewLastName] = useState(lastName)
  const [transactions, setTransactions] = useState([])

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

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions()
        setTransactions(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadTransactions()
  }, [])

  return (
    <>
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {editMode ? (
            <NameEditor
              initialFirstName={newFirstName}
              initialLastName={newLastName}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            <>{userName}!</>
          )}
        </h1>
        {editMode ? (
          <button onClick={handleCancel}>Cancel</button>
        ) : (
          <button onClick={handleEdit}>Edit Name</button>
        )}
      </div>
      <AccountSection accounts={transactions} />
    </>
  )
}

export default UserProfile
