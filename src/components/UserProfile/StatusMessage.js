import React from 'react'

const StatusMessage = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading accounts...</div>
  }

  if (error) {
    return <div>Error loading accounts: {error.message}</div>
  }

  return null
}

export default StatusMessage
