import { getHeaders } from '../utils/httpUtils.js'

const BASE_URL = 'http://localhost:3001/api/v1'

export const fetchUserAccountsFromAPI = async (userId) => {
  const response = await fetch(`${BASE_URL}/user/${userId}/accounts`, {
    headers: getHeaders(),
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Erreur de récupération des comptes : ' + response.status)
  }
}
