import axios from 'axios'

//Category Controller Request
export const createCategory = (payload) => {
    return axios({
        method: 'post',
        url: `https://localhost:44376/api/category`,
        data: {
            categoryName: payload.name,
            description: payload.desc
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

export const getCategory = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/category`,
    })
}

export const updateCategory = (payload) => {
    return axios({
        method: 'put',
        url: `https://localhost:44376/api/category/${payload.id}`,
        data: {
            id: payload.id,
            categoryName: payload.categoryName,
            description: payload.categoryDescription
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

export const deleteCategory = (payload) => {
    return axios({
        method: 'delete',
        url: `https://localhost:44376/api/category/${payload}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

//Subcategory Controller Requests
export const createSubcategory = (payload) => {
    return axios({
        method: 'post',
        url: `https://localhost:44376/api/subcategory`,
        data: {
            SubCategoryName: payload.name,
            CategoryID: payload.id
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

export const getSubcategory = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/subcategory`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    })
}

export const updateSubcategory = (payload) => {
    return axios({
        method: 'put',
        url: `https://localhost:44376/api/subcategory/${payload.id}`,
        data: {
            "iD": payload.id,
            "subCategoryName": payload.name,
            "categoryID": payload.categoryid
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

export const deleteSubcategory = (payload) => {
    return axios({
        method: 'delete',
        url: `https://localhost:44376/api/subcategory/${payload}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

// Product Controller Create Requests
export const createProducts = (payload) => {
    return axios({
        method: 'post',
        url: `https://localhost:44376/api/products`,
        data: payload,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

// Product Controller Get Request
export const getProducts = () => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/products`
    })
}

// Product Controller Get Request By ID
export const getProductById = (payload) => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/products/${payload}`
    }).catch(err => console.error(err))
}

export const getProductImageById = (payload) => {
    return axios({
        method: 'get',
        url: `https://localhost:44376/api/products/productmin/${payload}`
    }).catch(err => console.error(err))
}