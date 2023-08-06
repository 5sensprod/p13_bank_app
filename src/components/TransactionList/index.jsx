import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDate, currencyFormatter } from '../../utils/formats'
import {
  fetchTransactions,
  updateAndRefreshTransaction,
} from '../../actions/transactionActions'
import style from './TransactionList.module.css'

const TransactionList = ({ accountId }) => {
  const [isEditing, setIsEditing] = useState(null)
  const [editedValues, setEditedValues] = useState({
    category: '',
    notes: '',
  })

  const handleUpdate = (transaction) => {
    dispatch(
      updateAndRefreshTransaction(accountId, transaction._id, editedValues),
    )
    setIsEditing(null)
  }

  const dispatch = useDispatch()
  const transactions = useSelector((state) => state.transactions.transactions)
  const loading = useSelector((state) => state.transactions.loading)
  const error = useSelector((state) => state.transactions.error)
  const updateError = useSelector((state) => state.transactions.updateError)
  const [expandedTransaction, setExpandedTransaction] = useState(null)

  useEffect(() => {
    dispatch(fetchTransactions(accountId))
  }, [accountId, dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  if (updateError)
    return <p>Error updating transaction: {updateError.message}</p>

  return (
    <section>
      {/* <h2>Transactions for account {accountId}</h2> */}
      <table className={style.transactionTable}>
        <thead>
          <tr className={style.header}>
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
                <td>
                  {expandedTransaction === transaction._id ? (
                    <i className="fa fa-chevron-up"></i>
                  ) : (
                    <i className="fa fa-chevron-down"></i>
                  )}
                  {' ' + formatDate(transaction.date)}
                </td>
                <td>{transaction.description}</td>
                <td>{currencyFormatter(transaction.amount)}</td>
                <td>{currencyFormatter(transaction.balance)}</td>
              </tr>
              {expandedTransaction === transaction._id && (
                <tr>
                  <td colSpan="4">
                    <div className={style.transactionDetails}>
                      <p>Transaction Type: {transaction.transactionType}</p>
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
    </section>
  )
}

export default TransactionList
