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
