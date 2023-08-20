import React from 'react'
import NameEditor from './NameEditor'
import styles from './UserProfile.module.css'
import Button from '../Button'
import PropTypes from 'prop-types'

/**
 * Composant NameEditControl.
 *
 * Ce composant affiche soit un bouton pour éditer le nom de l'utilisateur, soit un éditeur pour modifier le nom en fonction du mode d'édition.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} props.editMode - Détermine si le composant est en mode d'édition ou non.
 * @param {string} props.newFirstName - Le prénom de l'utilisateur à éditer.
 * @param {string} props.newLastName - Le nom de famille de l'utilisateur à éditer.
 * @param {function} props.onSave - Fonction callback appelée pour sauvegarder les modifications du nom.
 * @param {function} props.onCancel - Fonction callback appelée pour annuler l'édition du nom.
 * @param {function} props.onEdit - Fonction callback appelée pour commencer l'édition du nom.
 *
 * @example
 * <NameEditControl
 *    editMode={true}
 *    newFirstName="Jean"
 *    newLastName="Dupont"
 *    onSave={handleSave}
 *    onCancel={handleCancel}
 *    onEdit={handleEdit}
 * />
 *
 * @returns {React.ReactNode} - Le contrôle d'édition du nom en mode d'édition ou le bouton pour éditer.
 */

const NameEditControl = ({
  editMode,
  newFirstName,
  newLastName,
  onSave,
  onCancel,
  onEdit,
}) =>
  editMode ? (
    <NameEditor
      initialFirstName={newFirstName}
      initialLastName={newLastName}
      onSave={onSave}
      onCancel={onCancel}
    />
  ) : (
    <Button className={styles.editButton} onClick={onEdit} label="Edit Name" />
  )

export default NameEditControl

NameEditControl.propTypes = {
  editMode: PropTypes.bool.isRequired,
  newFirstName: PropTypes.string,
  newLastName: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

NameEditControl.defaultProps = {
  newFirstName: '',
  newLastName: '',
}
