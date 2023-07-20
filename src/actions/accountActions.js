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

  // Récupére les comptes depuis localStorage d'abord
  const cachedAccounts = localStorage.getItem('userAccounts')

  if (cachedAccounts) {
    try {
      const parsedData = JSON.parse(cachedAccounts)
      if (parsedData.body && Array.isArray(parsedData.body)) {
        dispatch(fetchAccountsSuccess(parsedData.body))
      } else {
        console.error('Invalid data structure in localStorage:', cachedAccounts)
      }
    } catch (e) {
      console.error('Error parsing data from localStorage:', e)
    }
  } else {
    // Si aucun compte n'est en cache, ils sont récupérés depuis le serveur
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

        // Stocke l'intégralité de la réponse dans localStorage pour les utilisations futures
        localStorage.setItem('userAccounts', JSON.stringify(data))

        // Utilisez data.body pour dispatcher vers le store Redux
        dispatch(fetchAccountsSuccess(data.body))
      } else {
        throw new Error(
          'Erreur de récupération des comptes : ' + response.status,
        )
      }
    } catch (error) {
      console.error(error)
      dispatch(fetchAccountsFailure(error))
    }
  }
}
