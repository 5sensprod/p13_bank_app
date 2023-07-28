import React from 'react'
import PropTypes from 'prop-types'

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

UserForm.propTypes = {
  newFirstName: PropTypes.string.isRequired,
  newLastName: PropTypes.string.isRequired,
  handleFirstNameChange: PropTypes.func.isRequired,
  handleLastNameChange: PropTypes.func.isRequired,
}

export default UserForm
