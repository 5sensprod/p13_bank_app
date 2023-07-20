import React, { useState } from 'react'
import styles from './UserProfile.module.css'

const NameEditor = ({
  initialFirstName,
  initialLastName,
  onSave,
  onCancel,
}) => {
  const [firstName, setFirstName] = useState(initialFirstName)
  const [lastName, setLastName] = useState(initialLastName)

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleSaveClick = () => {
    onSave(firstName, lastName)
  }

  const handleCancelClick = () => {
    onCancel()
  }

  return (
    <>
      <div>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </div>
      <div>
        <button className={styles.editButton} onClick={handleSaveClick}>
          Save
        </button>
        <button className={styles.editButton} onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </>
  )
}

export default NameEditor
