import { useState } from 'react'

const useValidation = () => {
  const [error, setError] = useState('')

  const validateInputs = (username, password) => {
    if (!username.trim()) {
      setError('Username is required.')
      return false
    }

    if (!password.trim()) {
      setError('Password is required.')
      return false
    }

    setError('') // Reset error if there was any
    return true
  }

  return {
    error,
    validateInputs,
  }
}

export default useValidation
