import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authenticateAndFetchProfile } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'

/**
 * Un hook personnalisé pour gérer le processus d'authentification.
 *
 * Il se charge d'authentifier un utilisateur en utilisant la fonction `authenticateAndFetchProfile`
 * fournie par les actions Redux. En cas de succès, il redirige l'utilisateur vers la page de profil.
 * En cas d'échec, il gère l'erreur et la retourne.
 *
 * @returns {object} L'objet contenant la méthode d'authentification et une éventuelle erreur.
 *
 * @example
 * ```jsx
 * const { authenticate, error } = useAuthentication();
 * ```
 */
const useAuthentication = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  /**
   * Authentifie l'utilisateur en utilisant ses identifiants.
   *
   * @param {string} username - Le nom d'utilisateur.
   * @param {string} password - Le mot de passe de l'utilisateur.
   * @return {Promise<Error|null>} Une erreur en cas d'échec, ou null en cas de succès.
   */
  const authenticate = async (username, password) => {
    try {
      const isSuccess = await dispatch(
        authenticateAndFetchProfile(username, password),
      )
      if (isSuccess) {
        navigate('/user')
      } else {
        throw new Error(
          "Erreur lors de l'authentification ou de la récupération du profil.",
        )
      }
    } catch (err) {
      console.error(err)
      setError(err.message)
      return err
    }
  }

  return { authenticate, error }
}

export default useAuthentication
