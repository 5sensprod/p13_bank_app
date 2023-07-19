import React from 'react'

const UserForm = ({
  newFirstName,
  newLastName,
  handleFirstNameChange,
  handleLastNameChange,
}) => {
  return (
    <>
      <input
        type="text"
        value={newFirstName}
        onChange={handleFirstNameChange}
      />
      <input type="text" value={newLastName} onChange={handleLastNameChange} />
    </>
  )
}

export default UserForm
