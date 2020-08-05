import AdminReducer from './adminreducer'
import {combineReducers} from 'redux'
import UserLoginReducer from './UserLoginReducer';
const reducer = combineReducers({
    adminlogin : AdminReducer,
    userlogin: UserLoginReducer
})
export default reducer