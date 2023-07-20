import { combineReducers } from 'redux'
import userReducer from './userReducer'
import accountReducer from './accountReducer'

const rootReducer = combineReducers({
  user: userReducer,
  accounts: accountReducer,
})

export default rootReducer
