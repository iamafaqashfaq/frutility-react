const initialState = {
    isLoggedIn: false,
}
const AdminLoginReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADMINLOGIN':
            return {
                ...state,
                isLoggedIn: true
            }
        case 'ADMINLOGOUT':
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state
    }
}
export default AdminLoginReducer