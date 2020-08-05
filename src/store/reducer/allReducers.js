import AdminReducer from './adminreducer'
import {combineReducers} from 'redux'
import UserLoginReducer from './UserLoginReducer';
import CartCountReducer from './CartCountReducer';
const reducer = combineReducers({
    adminlogin : AdminReducer,
    userlogin: UserLoginReducer,
    cartcount: CartCountReducer
})
export default reducer