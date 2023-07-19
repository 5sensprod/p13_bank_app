import React, { useState } from 'react'

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
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={handleCancelClick}>Cancel</button>
    </>
  )
}

export default NameEditor
