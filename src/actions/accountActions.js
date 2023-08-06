import { fetchUserAccountsFromAPI } from '../api/accountsAPI.js'
import { mockAccounts } from '../data/mockedAccounts.js'

// Constantes d'Action pour les comptes
export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST'
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS'
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE'

// Créateurs d'Actions pour les comptes
export const fetchAccountsRequest = () => ({
  type: FETCH_ACCOUNTS_REQUEST,
})

export const fetchAccountsSuccess = (accounts) => ({
  type: FETCH_ACCOUNTS_SUCCESS,
  payload: accounts,
})

export const fetchAccountsFailure = (error) => ({
  type: FETCH_ACCOUNTS_FAILURE,
  payload: error,
})

// Actions Asynchrones pour les comptes
export const fetchUserAccounts = (userId) => async (dispatch) => {
  dispatch(fetchAccountsRequest())

  // Vérifiez la valeur de la variable d'environnement
  if (process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    console.info('Utilisation des données mockées pour les comptes.')
    dispatch(fetchAccountsSuccess(mockAccounts))
    return
  }

  try {
    const data = await fetchUserAccountsFromAPI(userId)
    dispatch(fetchAccountsSuccess(data.body))
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de l'API:",
      error.message,
    )
    dispatch(fetchAccountsFailure(error))
  }
}
