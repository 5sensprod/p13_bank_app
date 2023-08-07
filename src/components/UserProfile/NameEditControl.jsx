import React from 'react'
import NameEditor from './NameEditor'
import styles from './UserProfile.module.css'
import Button from '../Button'

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
