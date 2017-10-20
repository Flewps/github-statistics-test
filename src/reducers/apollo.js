
import { combineReducers } from 'redux'
import { client } from '../apolloClient'

export default combineReducers({
    apollo: client.reducer(),
})