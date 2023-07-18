const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case 'SET_USER_PROFILE':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      }
    case 'UPDATE_USER_PROFILE_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'UPDATE_USER_PROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          ...action.payload,
        },
      }
    case 'UPDATE_USER_PROFILE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case 'user/signOut':
      return { ...initialState }
    default:
      return state
  }
}

export default userReducer
