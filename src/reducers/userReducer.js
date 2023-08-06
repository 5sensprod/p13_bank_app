import {
  LOGIN_SUCCESS,
  LOGOUT,
  SET_USER_PROFILE,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
} from '../actions/userActions'

const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  updating: false,
  error: null,
  updateError: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      }
    case UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        updating: true,
        updateError: null,
      }
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        updating: false,
        user: {
          ...state.user,
          ...action.payload,
        },
      }
    case UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        updating: false,
        updateError: action.payload,
      }
    case 'user/signOut':
      return { ...initialState }
    default:
      return state
  }
}

export default userReducer
