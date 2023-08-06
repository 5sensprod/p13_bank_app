import {
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILURE,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_REQUEST,
  UPDATE_TRANSACTION_FAILURE,
} from '../actions/transactionActions'

const initialState = {
  transactions: [],
  loading: false,
  updating: false, // Ajout pour indiquer si une mise à jour est en cours
  error: null,
  updateError: null, // Ajout pour gérer les erreurs de mise à jour
}

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      }
    case FETCH_TRANSACTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case UPDATE_TRANSACTION_REQUEST:
      return {
        ...state,
        updating: true,
        updateError: null, // On réinitialise l'erreur de mise à jour à chaque nouvelle tentative
      }
    case UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction._id === action.payload._id ? action.payload : transaction,
        ),
      }
    case UPDATE_TRANSACTION_FAILURE:
      return {
        ...state,
        updating: false, // La mise à jour est terminée
        updateError: action.payload,
      }

    default:
      return state
  }
}

export default transactionReducer
