import {
  LOGIN_SUCCESS,
  LOGOUT,
  SET_USER_PROFILE,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
} from '../actions/userActions'

// État initial du réducteur
const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  updating: false,
  error: null,
  updateError: null,
}

/**
 * Gère les actions relatives aux utilisateurs.
 *
 * @function
 * @param {Object} state - L'état actuel.
 * @param {Object} action - L'action envoyée au réducteur.
 * @returns {Object} - Le nouvel état.
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // Lorsque l'utilisateur se connecte avec succès
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      }

    case LOGOUT:
      // Lorsque l'utilisateur se déconnecte
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }

    case SET_USER_PROFILE:
      // Mettre à jour le profil utilisateur sans avoir à le demander à l'API
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      }

    case UPDATE_USER_PROFILE_REQUEST:
      // Lorsque la mise à jour du profil est demandée
      return {
        ...state,
        updating: true,
        updateError: null,
      }

    case UPDATE_USER_PROFILE_SUCCESS:
      // Lorsque la mise à jour du profil est réussie
      return {
        ...state,
        updating: false,
        user: {
          ...state.user,
          ...action.payload,
        },
      }

    case UPDATE_USER_PROFILE_FAILURE:
      // En cas d'échec de la mise à jour du profil
      return {
        ...state,
        updating: false,
        updateError: action.payload,
      }

    case 'user/signOut':
      // Réinitialise à l'état initial lors de la déconnexion
      return { ...initialState }

    default:
      return state
  }
}

export default userReducer
