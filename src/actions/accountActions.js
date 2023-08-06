import { fetchUserAccountsFromAPI } from '../api/accountsAPI.js'

export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST'
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS'
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE'

// Action creators
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

export const fetchUserAccounts = (userId) => async (dispatch) => {
  dispatch(fetchAccountsRequest())

  try {
    const data = await fetchUserAccountsFromAPI(userId)
    dispatch(fetchAccountsSuccess(data.body))
  } catch (error) {
    console.error(error)
    dispatch(fetchAccountsFailure(error))
  }
}
