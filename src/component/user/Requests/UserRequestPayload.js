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
