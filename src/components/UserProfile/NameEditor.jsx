import React, { useState } from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'
import styles from './UserProfile.module.css'

/**
 * A component that provides editable inputs for the user's first and last name.
 *
 * @component
 * @param {Object} props
 * @param {string} props.initialFirstName - The initial value for the first name input.
 * @param {string} props.initialLastName - The initial value for the last name input.
 * @param {function} props.onSave - Callback function to handle saving changes.
 * Receives two parameters: the new first name and the new last name.
 * @param {function} props.onCancel - Callback function to handle canceling edits.
 * @returns {React.ReactNode} The rendered name editing component.
 */

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
        <Button
          className={styles.editSaveButton}
          onClick={handleSaveClick}
          label="Save"
        />
        <Button
          className={styles.editCancelButton}
          onClick={handleCancelClick}
          label="Cancel"
        />
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
