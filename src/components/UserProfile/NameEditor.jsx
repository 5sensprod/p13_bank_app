import React, { useState } from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'
import styles from './UserProfile.module.css'

/**
 * Composant qui fournit des champs modifiables pour le prénom et le nom de l'utilisateur.
 * Intègre également une gestion des erreurs pour s'assurer que les champs prénom et nom ne sont pas vides.
 *
 * @component
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.initialFirstName - La valeur initiale pour le champ prénom.
 * @param {string} props.initialLastName - La valeur initiale pour le champ nom.
 * @param {function} props.onSave - Fonction de rappel pour gérer l'enregistrement des modifications.
 * Elle reçoit deux paramètres : le nouveau prénom et le nouveau nom.
 * @param {function} props.onCancel - Fonction de rappel pour gérer l'annulation des modifications.
 * @returns {React.ReactNode} - Le composant de modification de nom rendu avec la gestion des erreurs.
 */

const NameEditor = ({
  initialFirstName,
  initialLastName,
  onSave,
  onCancel,
}) => {
  const [firstName, setFirstName] = useState(initialFirstName)
  const [lastName, setLastName] = useState(initialLastName)
  const [error, setError] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleSaveClick = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setError('Both first name and last name are required.')
      return
    }

    setError('') // Clear any existing error
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
