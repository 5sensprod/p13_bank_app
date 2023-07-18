const initialState = {
  isLoggedIn: false,
  user: null,
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
    default:
      return state
  }
}

export default userReducer
