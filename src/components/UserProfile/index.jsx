import React from 'react'
import AccountSection from '../Account'
import NameEditControl from './NameEditControl'
import UserName from '../UserName'
import StatusMessage from './StatusMessage'
import useUserProfileData from '../hooks/useUserProfileData'
import styles from './UserProfile.module.css'

/**
 * Composant UserProfile.
 *
 * Ce composant affiche les informations du profil utilisateur avec la possibilité de modifier le nom de l'utilisateur.
 * Il affiche également une liste des comptes associés à l'utilisateur ainsi qu'un message de statut
 * indiquant les états de chargement ou d'erreur.
 *
 * @component
 *
 * @example
 * <UserProfile />
 *
 * @returns {React.ReactNode} - Le rendu du profil utilisateur avec les informations, le contrôle d'édition et les comptes associés.
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
