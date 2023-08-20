import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

/**
 * Custom Button Component.
 *
 * This component provides a reusable button with custom styles and behavior.
 *
 * @component
 * @param {string} [className=''] - Additional CSS class for the button.
 * @param {function} [onClick] - Click handler for the button. Not required for submit/reset buttons.
 * @param {string} label - The text displayed on the button.
 * @param {("button"|"submit"|"reset")} [type='button'] - The type of the button. Determines its behavior in a form context.
 * @returns {React.ReactNode}
 */

const Button = ({ className, onClick, label, type = 'button' }) => {
  return (
    <button
      type={type}
      className={[styles.button, className].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

Button.defaultProps = {
  className: '',
  type: 'button',
}

export default Button
