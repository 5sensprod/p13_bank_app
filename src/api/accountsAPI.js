import { getHeaders } from '../utils/httpUtils.js'

export const fetchUserAccountsFromAPI = async (userId) => {
  const response = await fetch(
    `http://localhost:3001/api/v1/user/${userId}/accounts`,
    {
      headers: getHeaders(),
    },
  )

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Erreur de récupération des comptes : ' + response.status)
  }
}
