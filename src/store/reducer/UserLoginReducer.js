const initialState = {
    isLoggedIn: false
}
const UserLoginReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USERLOGIN':
            return {
                ...state,
                isLoggedIn: true
            }
        case 'USERLOGOUT':
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state
    }
}
export default UserLoginReducer