import React, { useState } from 'react'
import PropTypes from 'prop-types'
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
        <button className={styles.editSaveButton} onClick={handleSaveClick}>
          Save
        </button>
        <button className={styles.editCancelButton} onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </>
  )
}

NameEditor.propTypes = {
  initialFirstName: PropTypes.string.isRequired,
  initialLastName: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default NameEditor
