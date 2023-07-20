import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AccountSection from './AccountSection'
import { updateUserProfile, fetchUserProfile } from '../../actions/userActions'
import styles from './UserProfile.module.css'
import NameEditor from './NameEditor'
import { fetchUserAccounts } from '../../actions/accountActions'

const UserProfile = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const accounts = useSelector((state) => state.accounts.accounts)
  const loadingAccounts = useSelector((state) => state.accounts.loading)
  const errorAccounts = useSelector((state) => state.accounts.error)

  const [editMode, setEditMode] = useState(false)
  const [newFirstName, setNewFirstName] = useState(user.firstName)
  const [newLastName, setNewLastName] = useState(user.lastName)

  useEffect(() => {
    setNewFirstName(user.firstName)
    setNewLastName(user.lastName)
  }, [user.firstName, user.lastName])

  useEffect(() => {
    // Action pour obtenir le profil de l'utilisateur dès que le composant est monté.
    dispatch(fetchUserProfile())
  }, [dispatch])

  const userId = user && user.id // Extraction de l'expression complexe en une variable séparée

  useEffect(() => {
    // Ensuite, avec l'ID de l'utilisateur, obtention de ses comptes
    if (userId) {
      dispatch(fetchUserAccounts(userId))
    }
  }, [dispatch, userId]) // Nous nous assurons de ne dépendre que de user.id, pas de l'objet user entier.

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleSave = (firstName, lastName) => {
    dispatch(updateUserProfile({ firstName, lastName }))
    setEditMode(false)
  }

  const handleCancel = () => {
    setNewFirstName(user.firstName)
    setNewLastName(user.lastName)
    setEditMode(false)
  }

  const userName =
    user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : 'Loading...'

  if (loadingAccounts) {
    return <div>Loading accounts...</div>
  }

  if (errorAccounts) {
    return <div>Error loading accounts: {errorAccounts.message}</div>
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
      <AccountSection accounts={accounts} />
    </>
  )
}

export default UserProfile
