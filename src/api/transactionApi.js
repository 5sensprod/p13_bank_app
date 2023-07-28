import { getHeaders } from '../utils/httpUtils.js'

const BASE_URL = 'http://localhost:3001/api/v1'

export const fetchTransactionsFromAPI = async (accountId) => {
  const response = await fetch(
    `${BASE_URL}/account/${accountId}/transactions`,
    {
      headers: getHeaders(),
    },
  )

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(
      'Erreur lors de la récupération des transactions: ' + response.status,
    )
  }
}

export const updateTransaction = async (accountId, transactionId, updates) => {
  const response = await fetch(
    `${BASE_URL}/account/${accountId}/transactions/${transactionId}`,
    {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(updates),
    },
  )

  if (response.ok) {
    return await response.json()
  } else {
    const errorData = await response.json()
    throw new Error(errorData.message)
  }
}
