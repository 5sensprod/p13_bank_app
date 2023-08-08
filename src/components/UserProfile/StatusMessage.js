import React from 'react'

const StatusMessage = ({ isLoading, error }) =>
  isLoading ? (
    <div>Loading accounts...</div>
  ) : error ? (
    <div>Error loading accounts: {error.message}</div>
  ) : null

export default StatusMessage
