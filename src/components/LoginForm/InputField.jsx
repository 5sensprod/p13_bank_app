import React from 'react'
import PropTypes from 'prop-types'
import styles from './Login.module.css'

/**
 * InputField - Un composant pour afficher un champ de saisie avec un libellé et un message d'erreur.
 *
 * @param {Object} props - Les propriétés pour le composant.
 * @param {string} props.id - L'identifiant pour le champ de saisie.
 * @param {string} props.label - Le libellé à afficher au-dessus du champ de saisie.
 * @param {string} props.type - Le type de champ de saisie (ex. "text", "password").
 * @param {string} props.value - La valeur actuelle du champ de saisie.
 * @param {function} props.onChange - Le gestionnaire d'événement pour les changements dans le champ de saisie.
 * @param {string} [props.error] - Un message d'erreur à afficher sous le champ de saisie.
 *
 * @returns {React.ReactNode} - Le champ de saisie rendu avec son libellé et son message d'erreur.
 */
const InputField = ({ id, label, type, value, onChange, error }) => (
  <div className={styles.inputWrapper}>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} value={value} onChange={onChange} />
    {error && <span className={styles.errorMessage}>{error}</span>}
  </div>
)

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default InputField
