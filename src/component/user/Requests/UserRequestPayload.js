import axios from 'axios'


//Get Categories
export const getCategories = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/category`
    }).catch(err => console.log(err))
}
//Get Subcategories
export const getSubcategories = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/subcategory`
    }).catch(err => console.error(err))
}
//Get Products with Single Image
export const getMinProducts = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/products/productmin`,
    }).catch(err => console.error(err))
}
export const getProductById = (payload) => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/products/productminbyid/`+payload,
    }).catch(err => console.error(err))
}

//Signup User
export const userSignup = (payload) => {
    return axios({
        method: "POST",
        url: `https://localhost:44376/api/usercontroller/userregister`,
        data: payload,
        withCredentials: true
    }).catch(err => console.error(err))
}
//Login User
export const userLogin = (payload) => {
    return axios({
        method: 'post',
        url: `https://localhost:44376/api/usercontroller/login`,
        data: payload,
        withCredentials: true
    }).catch(err => console.error(err))
}

//Order an item
export const postOrder = (payload) => {
    return axios({
        method: 'post',
        url: `https://localhost:44376/api/orders`,
        data: payload,
        withCredentials: true,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.error(err))
}