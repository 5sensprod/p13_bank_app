import { getHeaders } from '../utils/httpUtils.js'

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
})

export const logout = () => ({
  type: 'LOGOUT',
})

export const fetchUserProfile = () => async (dispatch, getState) => {
  try {
    const { email, password } = getState().user // Récupère l'email et le mot de passe depuis le state Redux

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) {
      const data = await response.json()
      dispatch(setUserProfile(data.body))
    } else {
      throw new Error('Erreur de connexion : ' + response.status)
    }
  } catch (error) {
    console.error(error)
  }
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

export const updateUserProfile = ({ firstName, lastName }) => {
  return async (dispatch) => {
    dispatch(updateUserProfileRequest())

    try {
      const response = await fetch(
        'http://localhost:3001/api/v1/user/profile',
        {
          method: 'PUT',
          headers: getHeaders(),
          body: JSON.stringify({ firstName, lastName }),
        },
      )

      if (response.ok) {
        const data = await response.json()
        dispatch(updateUserProfileSuccess(data.body))
      } else {
        throw new Error('Erreur de mise à jour du profil : ' + response.status)
      }
    } catch (error) {
      console.error(error)
      dispatch(updateUserProfileFailure(error))
    }
  }
}
export const storeUserCredentials = (email, password) => ({
  type: 'STORE_USER_CREDENTIALS',
  payload: { email, password },
})
