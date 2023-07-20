const BASE_URL = 'http://localhost:3001/api/v1'

export const fetchTransactionsFromAPI = async (accountId) => {
  const token = localStorage.getItem('token')

  const response = await fetch(
    `${BASE_URL}/account/${accountId}/transactions`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
  const token = localStorage.getItem('token')

  const response = await fetch(
    `${BASE_URL}/account/${accountId}/transactions/${transactionId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
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
