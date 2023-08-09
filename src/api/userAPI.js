import { getHeaders } from '../utils/httpUtils.js'

/**
 * Récupère le profil utilisateur depuis l'API.
 *
 * @async
 * @function
 * @param {string} email - L'adresse e-mail de l'utilisateur.
 * @param {string} password - Le mot de passe de l'utilisateur.
 * @returns {Promise<Object>} Renvoie les données du profil de l'utilisateur en cas de succès.
 * @throws {Error} Renvoie une erreur si la récupération échoue.
 */
export const fetchUserProfileFromAPI = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json() // On tente toujours de parser la réponse, que ce soit pour un succès ou une erreur.

    if (response.ok) {
      return data
    } else {
      // Au lieu de simplement retourner un code d'erreur, nous retournons aussi le message d'erreur renvoyé par l'API (s'il existe).
      throw new Error(
        data.message || 'Erreur de connexion : ' + response.status,
      )
    }
  } catch (error) {
    throw error
  }
}

/**
 * Met à jour le profil utilisateur dans l'API.
 *
 * @async
 * @function
 * @param {string} firstName - Le prénom de l'utilisateur.
 * @param {string} lastName - Le nom de famille de l'utilisateur.
 * @returns {Promise<Object>} Renvoie les données mises à jour du profil utilisateur en cas de succès.
 * @throws {Error} Renvoie une erreur si la mise à jour échoue.
 */
export const updateUserProfileInAPI = async (firstName, lastName) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ firstName, lastName }),
    })

    const data = await response.json()

    if (response.ok) {
      return data
    } else {
      throw new Error(
        data.message || 'Erreur de mise à jour du profil : ' + response.status,
      )
    }
  } catch (error) {
    console.log('Erreur lors de la mise à jour du profil :', error.message)
    throw error
  }
}
