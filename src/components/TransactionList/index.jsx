import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchTransactionsFromAPI,
  updateTransaction,
} from '../../api/transactionApi'
import style from './TransactionList.module.css'
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsFailure,
  updateTransactionSuccess,
} from '../../actions/transactionActions'

const TransactionList = ({ accountId }) => {
  const [isEditing, setIsEditing] = useState(null)
  const [editedValues, setEditedValues] = useState({
    category: '',
    notes: '',
  })

  const handleUpdate = async (transaction) => {
    try {
      await updateTransaction(accountId, transaction._id, editedValues)
      const updatedTransaction = { ...transaction, ...editedValues }
      dispatch(updateTransactionSuccess(updatedTransaction))
      setIsEditing(null)
    } catch (error) {
      console.error('Error updating transaction:', error)
    }
  }

  const dispatch = useDispatch()
  const transactions = useSelector((state) => state.transactions.transactions)
  const loading = useSelector((state) => state.transactions.loading)
  const error = useSelector((state) => state.transactions.error)
  const [expandedTransaction, setExpandedTransaction] = useState(null)

  useEffect(() => {
    dispatch(fetchTransactionsRequest())
    fetchTransactionsFromAPI(accountId)
      .then((data) => {
        dispatch(fetchTransactionsSuccess(data.body))
      })
      .catch((err) => dispatch(fetchTransactionsFailure(err)))
  }, [accountId, dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <main>
      <h2>Transactions for account {accountId}</h2>
      <table className={style.transactionTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <React.Fragment key={transaction._id}>
              <tr
                className={style.transactionRow}
                onClick={() =>
                  setExpandedTransaction(
                    expandedTransaction === transaction._id
                      ? null
                      : transaction._id,
                  )
                }
              >
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.balance}</td>
              </tr>
              {expandedTransaction === transaction._id && (
                <tr>
                  <td colSpan="4">
                    <div className={style.transactionDetails}>
                      {isEditing !== 'category' ? (
                        <p
                          onClick={() => {
                            setIsEditing('category')
                            setEditedValues({
                              ...editedValues,
                              category: transaction.category,
                            })
                          }}
                        >
                          Category: {transaction.category}{' '}
                          <i className="fa fa-pencil"></i>
                        </p>
                      ) : (
                        <div className={style.editField}>
                          <input
                            value={editedValues.category}
                            onChange={(e) =>
                              setEditedValues({
                                ...editedValues,
                                category: e.target.value,
                              })
                            }
                          />
                          <i
                            className="fa fa-check"
                            onClick={() => handleUpdate(transaction)}
                          ></i>

                          <i
                            className="fa fa-times"
                            onClick={() => setIsEditing(null)}
                          ></i>
                        </div>
                      )}

                      {isEditing !== 'notes' ? (
                        <p
                          onClick={() => {
                            setIsEditing('notes')
                            setEditedValues({
                              ...editedValues,
                              notes: transaction.notes,
                            })
                          }}
                        >
                          Notes: {transaction.notes}{' '}
                          <i className="fa fa-pencil"></i>
                        </p>
                      ) : (
                        <div className={style.editField}>
                          <input
                            value={editedValues.notes}
                            onChange={(e) =>
                              setEditedValues({
                                ...editedValues,
                                notes: e.target.value,
                              })
                            }
                          />
                          <i
                            className="fa fa-check"
                            onClick={() => handleUpdate(transaction)}
                          ></i>

                          <i
                            className="fa fa-times"
                            onClick={() => setIsEditing(null)}
                          ></i>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default TransactionList
