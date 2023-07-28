import React from 'react'
import PropTypes from 'prop-types'

/**
 * A form component for editing user's first and last name.
 *
 * @component
 * @param {Object} props
 * @param {string} props.newFirstName - The current value for the first name input.
 * @param {string} props.newLastName - The current value for the last name input.
 * @param {function} props.handleFirstNameChange - Callback to handle changes to the first name input.
 * @param {function} props.handleLastNameChange - Callback to handle changes to the last name input.
 * @returns {React.ReactNode} The rendered form component.
 */

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
