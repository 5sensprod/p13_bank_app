import React from 'react'
import { useSelector } from 'react-redux'

/**
 * UserName Component.
 *
 * This component displays the user's name based on the specified display type.
 * It can display the user's first name, last name, or both.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {('first'|'last'|'full')} props.display - Determines how the user's name should be displayed.
 * Default is 'full'.
 *
 * @example
 * return <UserName display="first" />
 *
 * @returns {React.ReactNode}
 */
const UserName = ({ display = 'full', className }) => {
  const user = useSelector((state) => state.user.user)

  const nameDisplay = {
    first: user?.firstName || 'Loading',
    last: user?.lastName || '',
    full: `${user?.firstName || 'Loading'} ${user?.lastName || ''}`,
  }

  return <span className={className}>{nameDisplay[display]}</span>
}

export default UserName
