import { getHeaders } from '../utils/httpUtils.js'

export const fetchUserProfileFromAPI = async (email, password) => {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ email, password }),
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Erreur de connexion : ' + response.status)
  }
}

export const updateUserProfileInAPI = async (firstName, lastName) => {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify({ firstName, lastName }),
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Erreur de mise à jour du profil : ' + response.status)
  }
}
