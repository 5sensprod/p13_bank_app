import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconWithText from '../IconWithText'

/**
 * NavigationLink component.
 *
 * @component
 * @param {Object} props
 * @param {string} props.to - The path to link to.
 * @param {string} [props.icon] - Icon class name for the icon.
 * @param {JSX.Element} [props.iconElement] - JSX element for custom icons.
 * @param {string|JSX.Element} props.text - Text or JSX element to display.
 * @param {string} [props.iconClassName=''] - Optional class name for the icon.
 * @param {string} [props.textClassName=''] - Optional class name for the text.
 * @param {Function} [props.onClick] - Click handler function.
 *
 * @example
 * return (
 *   <NavigationLink
 *     to="/path"
 *     icon="fa fa-user"
 *     text="Username"
 *     iconClassName="custom-icon"
 *     textClassName="custom-text"
 *     onClick={handleClick}
 *   />
 * )
 */
const NavigationLink = ({
  to,
  icon,
  iconElement,
  text,
  iconClassName = '',
  textClassName = '',
  onClick,
}) => (
  <Link to={to} onClick={onClick}>
    <IconWithText
      icon={icon}
      iconElement={iconElement}
      text={text}
      iconClassName={iconClassName}
      textClassName={textClassName}
    />
  </Link>
)

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconElement: PropTypes.element,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  iconClassName: PropTypes.string,
  textClassName: PropTypes.string,
  onClick: PropTypes.func,
}

export default NavigationLink
