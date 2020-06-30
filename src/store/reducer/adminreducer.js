const initialState = {
    isLoggedin: false,
}
const AdminLoginReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADMINLOGIN":
            return {
                ...state,
                isLoggedin: true
            }
        default:
            return state
    }
}
export default AdminLoginReducer