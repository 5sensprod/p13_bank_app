import { useState, useEffect } from 'react'
import { fetchTransactions } from '../api/transactionApi'

const useTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions()
        setTransactions(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    loadTransactions()
  }, [])

  return { transactions, loading, error }
}

export default useTransactions
