import {
  fetchTransactionsFromAPI,
  updateTransaction,
} from '../api/transactionApi'

import { mockedTransactions } from '../data/mockedTransactions'

// Constantes d'Action pour les transactions
export const FETCH_TRANSACTIONS_REQUEST = 'FETCH_TRANSACTIONS_REQUEST'
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS'
export const FETCH_TRANSACTIONS_FAILURE = 'FETCH_TRANSACTIONS_FAILURE'

// Créateurs d'Actions pour les transactions
export const fetchTransactionsRequest = () => ({
  type: FETCH_TRANSACTIONS_REQUEST,
})

export const fetchTransactionsSuccess = (transactions) => ({
  type: FETCH_TRANSACTIONS_SUCCESS,
  payload: transactions,
})

export const fetchTransactionsFailure = (error) => ({
  type: FETCH_TRANSACTIONS_FAILURE,
  payload: error,
})

// Actions Asynchrones pour les transactions
export const fetchTransactions = (accountId) => {
  return (dispatch) => {
    dispatch(fetchTransactionsRequest())
    if (USE_MOCK_DATA) {
      dispatch(fetchTransactionsSuccess(mockedTransactions))
    } else {
      fetchTransactionsFromAPI(accountId)
        .then((data) => {
          dispatch(fetchTransactionsSuccess(data.body))
        })
        .catch((error) => {
          dispatch(fetchTransactionsFailure(error))
        })
    }
  }
}

// Constantes d'Action pour la mise à jour de transactions
export const UPDATE_TRANSACTION_REQUEST = 'UPDATE_TRANSACTION_REQUEST'
export const UPDATE_TRANSACTION_SUCCESS = 'UPDATE_TRANSACTION_SUCCESS'
export const UPDATE_TRANSACTION_FAILURE = 'UPDATE_TRANSACTION_FAILURE'

// Créateurs d'Actions pour la mise à jour de transactions
export const updateTransactionRequest = () => ({
  type: UPDATE_TRANSACTION_REQUEST,
})

export const updateTransactionSuccess = (updatedTransaction) => ({
  type: UPDATE_TRANSACTION_SUCCESS,
  payload: updatedTransaction,
})

export const updateTransactionFailure = (error) => ({
  type: UPDATE_TRANSACTION_FAILURE,
  payload: error,
})

// Actions Asynchrones pour la mise à jour de transactions
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'true'

export const updateAndRefreshTransaction = (
  accountId,
  transactionId,
  updates,
) => {
  if (USE_MOCK_DATA) {
    return (dispatch) => {
      console.warn(
        'La mise à jour des transactions est désactivée en mode mock.',
      )
    }
  }

  return (dispatch) => {
    dispatch(updateTransactionRequest())
    updateTransaction(accountId, transactionId, updates)
      .then((updatedTransaction) => {
        dispatch(updateTransactionSuccess(updatedTransaction))
        dispatch(fetchTransactions(accountId))
      })
      .catch((error) => {
        dispatch(updateTransactionFailure(error))
        console.error('Error updating transaction:', error)
      })
  }
}
