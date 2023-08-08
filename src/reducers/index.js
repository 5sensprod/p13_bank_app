import { combineReducers } from 'redux'
import userReducer from './userReducer'
import accountReducer from './accountReducer'
import transactionReducer from './transactionReducer'

/**
 * `rootReducer` combine tous les réducteurs de l'application pour former l'état global.
 * L'application a trois principaux sous-états : user, accounts et transactions.
 * - `user` gère l'état de l'utilisateur et son authentification.
 * - `accounts` gère l'état des comptes.
 * - `transactions` gère l'état des transactions.
 *
 * Cette combinaison permet d'avoir une structure d'état organisée et segmentée,
 * facilitant la gestion et la mise à jour des différents aspects de l'état de l'application.
 *
 * @example
 * ```jsx
 * const store = createStore(rootReducer);
 * ```
 *
 * @type {import('redux').Reducer}
 */
const rootReducer = combineReducers({
  user: userReducer,
  accounts: accountReducer,
  transactions: transactionReducer,
})

export default rootReducer
