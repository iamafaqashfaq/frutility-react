import AdminReducer from './adminreducer'
import {combineReducers} from 'redux'
const reducer = combineReducers({
    adminlogin : AdminReducer
})
export default reducer