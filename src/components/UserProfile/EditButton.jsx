import React from 'react'
import styles from './UserProfile.module.css'

const EditButton = ({ handleSave, handleCancel }) => {
  return (
    <>
      <button className={styles.editButton} onClick={handleSave}>
        Save
      </button>
      <button className={styles.editButton} onClick={handleCancel}>
        Cancel
      </button>
    </>
  )
}

export default EditButton
