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
    const token = localStorage.getItem('token')
    const response = await fetch(
      `http://localhost:3001/api/v1/user/${userId}/accounts`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    if (response.ok) {
      const data = await response.json()

      // Utilise data.body pour dispatcher vers le store Redux
      dispatch(fetchAccountsSuccess(data.body))
    } else {
      throw new Error('Erreur de récupération des comptes : ' + response.status)
    }
  } catch (error) {
    console.error(error)
    dispatch(fetchAccountsFailure(error))
  }
}
