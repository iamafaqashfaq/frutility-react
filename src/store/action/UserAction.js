export const USERLOGIN = () => {
    return {
        type: 'USERLOGIN'
    }
}
export const USERLOGOUT = () => {
    return {
        type: 'USERLOGOUT'
    }
}
export const USERORDERCOUNT = (count) => {
    return {
        type: 'USERORDERCOUNT',
        count: count
    }
}
export const USERORDERINCREMENT = (count) => {
    return {
        type: 'USERORDERINCREMENT',
        incrementCount: count
    }
}