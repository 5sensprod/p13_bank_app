import React from 'react'
import { useSelector } from 'react-redux'

const UserName = ({ display = 'full' }) => {
  const user = useSelector((state) => state.user.user)

  if (display === 'first') {
    return <>{user?.firstName || 'Loading'}</>
  }

  if (display === 'last') {
    return <>{user?.lastName || ''}</>
  }

  return <>{`${user?.firstName || 'Loading'} ${user?.lastName || ''}`}</>
}

export default UserName
