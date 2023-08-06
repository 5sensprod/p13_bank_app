import {
  fetchUserProfileFromAPI,
  updateUserProfileInAPI,
} from '../api/userAPI.js'

import { authenticateUser } from '../api/authAPI'

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
})

export const logout = () => ({
  type: 'LOGOUT',
})

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
      // Ici, vous pouvez également dispatcher des actions d'échec si nécessaire.
      return false // Échec
    }
  }

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

export const setUserProfile = (user) => ({
  type: 'SET_USER_PROFILE',
  payload: user,
})

export function signOut() {
  return {
    type: 'user/signOut',
  }
}

export const UPDATE_USER_PROFILE_REQUEST = 'UPDATE_USER_PROFILE_REQUEST'
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS'
export const UPDATE_USER_PROFILE_FAILURE = 'UPDATE_USER_PROFILE_FAILURE'

export const updateUserProfileRequest = () => ({
  type: UPDATE_USER_PROFILE_REQUEST,
})

export const updateUserProfileSuccess = (user) => ({
  type: UPDATE_USER_PROFILE_SUCCESS,
  payload: user,
})

export const updateUserProfileFailure = (error) => ({
  type: UPDATE_USER_PROFILE_FAILURE,
  payload: error,
})

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

export const storeUserCredentials = (email, password) => ({
  type: 'STORE_USER_CREDENTIALS',
  payload: { email, password },
})
