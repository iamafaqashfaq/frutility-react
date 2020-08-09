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
export const getProducts = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/products`,
    }).catch(err => console.error(err))
}
export const getProductById = (payload) => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/products/productbyid/` + payload,
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
//Get Order Count of User
export const getUserOrderCount = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/orders/userordercount`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    })
}
//Get Order Items In Shopping Cart
export const getShoppingCartItems = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/orders/shoppingcart`,
        withCredentials: true,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.error(err))
}
//Delete an order from shopping cart
export const removeShoppingCartItem = (payload) => {
    return axios({
        method: 'delete',
        url: `https://localhost:44376/api/orders/${payload}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.error(err))
}

//Checkout Orders 
export const checkoutOrder = () => {
    return axios({
        method: 'put',
        url: `https://localhost:44376/api/orders/`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.error(err))
}

//User Signout
export const signout = () => {
    return axios({
        method: 'post',
        url: `https://localhost:44376/api/usercontroller/signout`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.error(err))
}
//Get User Details
export const getUser = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/usercontroller/getmydata`,
        withCredentials: true,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.error(err))
}
//Change User Password
export const changePassword = (payload) => {
    return axios({
        method: 'put',
        url: `https://localhost:44376/api/usercontroller/changepassword`,
        data: payload,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.error(err))
}
//Change User Address
export const changeAddress = (payload) => {
    return axios({
        method: 'put',
        url: `https://localhost:44376/api/usercontroller/changeaddress`,
        data: payload,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.error(err))
}
//Get Wishlist
export const getWishlist = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/wishlist`,
        withCredentials: true,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.log(err))
}
//Add product To Wishlist
export const addToWishlist = (payload) => {
    return axios({
        method: 'post',
        url: `https://localhost:44376/api/wishlist`,
        data: payload,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.log(err))
}
//Delete product from wishlist
export const deleteFromWishlist = (payload) => {
    return axios({
        method: 'delete',
        url: `https://localhost:44376/api/wishlist`,
        data: payload,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.log(err))
}
//Add Product Review
export const AddProductReview = (payload) => {
    return axios({
        method: 'post',
        url: `https://localhost:44376/api/productreviews`,
        data: payload,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.log(err))
}
export const GetProductReviews = (payload) => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/productreviews/${payload}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.log(err))
}
export const GetStarRating = (payload) => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/productreviews/starrating/${payload}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    }).catch(err => console.log(err))
}