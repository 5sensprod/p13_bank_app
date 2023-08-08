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
 * Action creator for successful login.
 * @param {Object} user - The authenticated user data.
 * @returns {Object} - Action object.
 */
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

/**
 * Action creator for logging out.
 * @returns {Object} - Action object.
 */
export const logout = () => ({
  type: LOGOUT,
})

/**
 * Action creator to set user profile data.
 * @param {Object} user - The user data.
 * @returns {Object} - Action object.
 */
export const setUserProfile = (user) => ({
  type: SET_USER_PROFILE,
  payload: user,
})

/**
 * Action creator to store user credentials.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Object} - Action object.
 */
export const storeUserCredentials = (email, password) => ({
  type: STORE_USER_CREDENTIALS,
  payload: { email, password },
})

/**
 * Action creator indicating the start of the user profile update.
 * @returns {Object} - Action object.
 */
export const updateUserProfileRequest = () => ({
  type: UPDATE_USER_PROFILE_REQUEST,
})

/**
 * Action creator for successful user profile update.
 * @param {Object} user - The updated user data.
 * @returns {Object} - Action object.
 */
export const updateUserProfileSuccess = (user) => ({
  type: UPDATE_USER_PROFILE_SUCCESS,
  payload: user,
})

/**
 * Action creator for failed user profile update.
 * @param {Error} error - Error object.
 * @returns {Object} - Action object.
 */
export const updateUserProfileFailure = (error) => ({
  type: UPDATE_USER_PROFILE_FAILURE,
  payload: error,
})

/**
 * Action creator for user sign out.
 * @returns {Object} - Action object.
 */
export function signOut() {
  return {
    type: 'user/signOut',
  }
}

/**
 * Asynchronous action to authenticate and fetch user profile.
 * @param {string} username - The username for authentication.
 * @param {string} password - The password for authentication.
 * @returns {function} - Thunk function for dispatching actions.
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
      console.error(
        "Erreur lors de l'authentification ou de la récupération du profil:",
        error,
      )
      return false // Échec
    }
  }

/**
 * Asynchronous action to fetch user profile.
 * @returns {function} - Thunk function for dispatching actions.
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
 * Asynchronous action to update user profile.
 * @param {Object} data - Object containing the new user data.
 * @returns {function} - Thunk function for dispatching actions.
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
