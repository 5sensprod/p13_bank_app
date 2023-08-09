/**
 * Authentifie l'utilisateur auprès de l'API.
 *
 * @async
 * @function
 * @param {string} username - Le nom d'utilisateur ou l'adresse e-mail de l'utilisateur.
 * @param {string} password - Le mot de passe de l'utilisateur.
 * @returns {Promise<Object>} Renvoie les données de l'utilisateur en cas de succès.
 * @throws {Error} Renvoie une erreur si l'authentification échoue.
 */
export const authenticateUser = async (username, password) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password }),
    })

    const data = await response.json()

    if (response.ok) {
      localStorage.setItem('token', data.body.token)
      return data.body
    } else {
      // Ici, vérifiez le message d'erreur renvoyé par l'API
      if (data.message === 'User not found!') {
        throw new Error('Sorry, user not found!')
      } else {
        throw new Error(
          data.message || 'Erreur de connexion : ' + response.status,
        )
      }
    }
  } catch (error) {
    console.log('Erreur spécifique :', error.message)
    throw error
  }
}
