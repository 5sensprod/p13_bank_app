import {
  fetchUserProfileFromAPI,
  updateUserProfileInAPI,
} from '../api/userAPI.js'
import { authenticateUser } from '../api/authAPI'

// Constantes d'Action pour l'utilisateur
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const STORE_USER_CREDENTIALS = 'STORE_USER_CREDENTIALS'
export const UPDATE_USER_PROFILE_REQUEST = 'UPDATE_USER_PROFILE_REQUEST'
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS'
export const UPDATE_USER_PROFILE_FAILURE = 'UPDATE_USER_PROFILE_FAILURE'

/**
 * Crée une action pour une connexion réussie.
 * @param {Object} user - Les données de l'utilisateur authentifié.
 * @returns {Object} - L'objet action.
 */

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

/**
 * Crée une action pour déconnecter l'utilisateur.
 * @returns {Object} - L'objet de l'action.
 */

export const logout = () => ({
  type: LOGOUT,
})

/**
 * Crée une action pour définir les données du profil de l'utilisateur.
 * @param {Object} user - Les données de l'utilisateur.
 * @returns {Object} - L'objet de l'action.
 */

export const setUserProfile = (user) => ({
  type: SET_USER_PROFILE,
  payload: user,
})

/**
 * Crée une action pour stocker les identifiants de l'utilisateur.
 * @param {string} email - Email de l'utilisateur.
 * @param {string} password - Mot de passe de l'utilisateur.
 * @returns {Object} - L'objet de l'action.
 */

export const storeUserCredentials = (email, password) => ({
  type: STORE_USER_CREDENTIALS,
  payload: { email, password },
})

/**
 * Crée une action indiquant le début de la mise à jour du profil utilisateur.
 * @returns {Object} - L'objet de l'action.
 */
export const updateUserProfileRequest = () => ({
  type: UPDATE_USER_PROFILE_REQUEST,
})

/**
 * Crée une action pour une mise à jour réussie du profil utilisateur.
 * @param {Object} user - Les données mises à jour de l'utilisateur.
 * @returns {Object} - L'objet de l'action.
 */
export const updateUserProfileSuccess = (user) => ({
  type: UPDATE_USER_PROFILE_SUCCESS,
  payload: user,
})

/**
 * Crée une action pour une mise à jour échouée du profil utilisateur.
 * @param {Error} error - L'objet d'erreur.
 * @returns {Object} - L'objet de l'action.
 */
export const updateUserProfileFailure = (error) => ({
  type: UPDATE_USER_PROFILE_FAILURE,
  payload: error,
})

/**
 * Crée une action pour déconnecter l'utilisateur.
 * @returns {Object} - L'objet de l'action.
 */
export function signOut() {
  return {
    type: 'user/signOut',
  }
}

/**
 * Fonction Thunk pour authentifier et récupérer le profil de l'utilisateur.
 * @param {string} username - Le nom d'utilisateur pour l'authentification.
 * @param {string} password - Le mot de passe pour l'authentification.
 * @returns {function} - Fonction Thunk pour dispatcher les actions.
 */

export const authenticateAndFetchProfile =
  (username, password) => async (dispatch) => {
    try {
      const userData = await authenticateUser(username, password)
      dispatch(storeUserCredentials(username, password))
      dispatch(loginSuccess(userData))

      const userProfile = await fetchUserProfileFromAPI()
      dispatch(setUserProfile(userProfile))

      return true // Succès
    } catch (error) {
      throw error
    }
  }

/**
 * Action asynchrone pour récupérer le profil de l'utilisateur.
 * @returns {function} - Fonction Thunk pour dispatcher les actions.
 */
export const fetchUserProfile = () => async (dispatch, getState) => {
  try {
    const { email, password } = getState().user
    const data = await fetchUserProfileFromAPI(email, password)
    dispatch(setUserProfile(data.body))
  } catch (error) {
    console.error(error)
  }
  return Promise.resolve()
}

/**
 * Action asynchrone pour mettre à jour le profil de l'utilisateur.
 * @param {Object} data - Objet contenant les nouvelles données de l'utilisateur.
 * @returns {function} - Fonction Thunk pour dispatcher les actions.
 */
export const updateUserProfile =
  ({ firstName, lastName }) =>
  async (dispatch) => {
    dispatch(updateUserProfileRequest())
    try {
      const data = await updateUserProfileInAPI(firstName, lastName)
      dispatch(updateUserProfileSuccess(data.body))
    } catch (error) {
      console.error(error)
      dispatch(updateUserProfileFailure(error))
    }
  }
