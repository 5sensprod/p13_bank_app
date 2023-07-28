import { getHeaders } from '../utils/httpUtils.js'

export const fetchUserProfile = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: getHeaders(),
    })

    if (response.ok) {
      const data = await response.json()
      return data.body
    } else {
      throw new Error('Erreur lors de la récupération du profil utilisateur')
    }
  } catch (error) {
    console.log('Erreur spécifique :', error)
    throw new Error(
      'Erreur générale lors de la récupération du profil utilisateur',
    )
  }
}
