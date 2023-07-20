const BASE_URL = 'http://localhost:3001/api/v1'

export const fetchUserAccountsFromAPI = async (userId) => {
  const token = localStorage.getItem('token')

  const response = await fetch(`${BASE_URL}/user/${userId}/accounts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Erreur de récupération des comptes : ' + response.status)
  }
}
