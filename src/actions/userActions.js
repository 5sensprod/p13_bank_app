export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
})

export const logout = () => ({
  type: 'LOGOUT',
})

export const fetchUserProfile = () => async (dispatch) => {
  // console.log('fetchUserProfile action triggered')
  try {
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const data = await response.json()
      dispatch(setUserProfile(data.body)) // Dispatch les données du profil de l'utilisateur au reducer
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
      const token = localStorage.getItem('token')
      const response = await fetch(
        'http://localhost:3001/api/v1/user/profile',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
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
