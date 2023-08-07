import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

/**
 * Custom Button Component.
 *
 * This component provides a reusable button with custom styles and behavior.
 *
 * @component
 * @param {string} className - Additional CSS class for the button.
 * @param {function} onClick - Click handler for the button.
 * @param {React.ReactNode} children - Content of the button.
 * @returns {React.ReactNode}
 */

const Button = ({ className, onClick, label }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

Button.defaultProps = {
  className: '',
}

export default Button
