import React from 'react'
import AccountSection from '../Account/AccountSection'
import NameEditControl from './NameEditControl'
import UserName from '../UserName'
import StatusMessage from './StatusMessage'
import useUserProfileData from '../hooks/useUserProfileData'
import styles from './UserProfile.module.css'

/**
 * UserProfile Component.
 *
 * This component displays the user's profile information with the option to edit the user's name.
 * It also displays a list of accounts associated with the user and a status message
 * indicating loading or error states.
 *
 * @component
 */

const UserProfile = () => {
  const {
    accounts,
    loadingAccounts,
    errorAccounts,
    editMode,
    newFirstName,
    newLastName,
    handleEdit,
    handleSave,
    handleCancel,
  } = useUserProfileData()

  return (
    <>
      <StatusMessage isLoading={loadingAccounts} error={errorAccounts} />
      {!loadingAccounts && !errorAccounts && (
        <>
          <div className={styles.header}>
            <h1>
              Welcome back
              <br />
              <UserName />!
            </h1>
            <NameEditControl
              editMode={editMode}
              newFirstName={newFirstName}
              newLastName={newLastName}
              onSave={handleSave}
              onCancel={handleCancel}
              onEdit={handleEdit}
            />
          </div>
          <AccountSection accounts={accounts} />
        </>
      )}
    </>
  )
}

export default UserProfile
