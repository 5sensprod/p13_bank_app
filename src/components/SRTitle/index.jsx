import React from 'react'
import PropTypes from 'prop-types'
import styles from './SRTitle.module.css'

/**
 * Un composant pour afficher un titre accessible principalement aux lecteurs d'écran.
 * Bien que le titre soit visuellement masqué, il sera lu par les lecteurs d'écran.
 *
 * @component
 * @param {string} text - Le texte du titre à afficher.
 * @param {('h1'|'h2'|'h3'|'h4'|'h5'|'h6')} [level='h2'] - Le niveau du titre (h1, h2, etc.).
 *
 * @returns {React.ReactNode} Le titre rendu avec le texte donné et le niveau de titre spécifié.
 */
const SRTitle = ({ text, level = 'h2' }) => {
  const TagName = level
  return <TagName className={styles.srOnly}>{text}</TagName>
}

SRTitle.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

export default SRTitle
