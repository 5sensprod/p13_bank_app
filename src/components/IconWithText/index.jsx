import React from 'react'
import PropTypes from 'prop-types'

/**
 * IconWithText component.
 *
 * @component
 * @param {Object} props
 * @param {string} props.icon - Icon class name for the icon.
 * @param {JSX.Element} [props.iconElement] - JSX element for custom icons.
 * @param {string|JSX.Element} props.text - Text or JSX element to display.
 * @param {string} [props.iconClassName=''] - Optional class name for the icon.
 * @param {string} props.textClassName - Class name for the text.
 *
 * @example
 * return (
 *   <IconWithText
 *     icon="fa fa-user"
 *     text="Username"
 *     iconClassName="custom-icon"
 *     textClassName="custom-text"
 *   />
 * )
 */
const IconWithText = ({
  icon,
  iconElement,
  text,
  iconClassName = '',
  textClassName,
}) => (
  <>
    {icon && <i className={`${icon} ${iconClassName}`.trim()}></i>}
    {iconElement}
    {text &&
      (typeof text === 'string' ? (
        <span className={textClassName}>{text}</span>
      ) : (
        text
      ))}
  </>
)

IconWithText.propTypes = {
  icon: PropTypes.string,
  iconElement: PropTypes.element,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  iconClassName: PropTypes.string,
  textClassName: PropTypes.string,
}

export default IconWithText
