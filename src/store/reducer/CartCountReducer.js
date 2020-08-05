const initialState = {
    count: 0
}
const CartCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERORDERCOUNT':
            return {
                ...state,
                count: action.count
            }
        case 'USERORDERINCREMENT':
            return {
                ...state,
                count: action.incrementCount
            }
        default:
            return state
    }
}


export default CartCountReducer