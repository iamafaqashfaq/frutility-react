const initialState = {
    isLoggedIn: false,
    StatusChanged: 0
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
        case 'ORDERSTATUSCHANGED':
            return {
                ...state,
                StatusChanged: state.StatusChanged + 1
            }
        default:
            return state
    }
}
export default AdminLoginReducer