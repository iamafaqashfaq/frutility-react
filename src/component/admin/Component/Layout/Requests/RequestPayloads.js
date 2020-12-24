import axios from 'axios'

export const route = "https://127.0.0.1:5001/api/"
//Category Controller Request
export const createCategory = (payload) => {
    return axios({
        method: 'post',
        url: `${route}category`,
        data: {
            categoryName: payload.name,
            description: payload.desc
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

//Get Category List
export const getCategory = () => {
    return axios({
        method: 'get',
        url: `${route}category`,
    })
}

//Update Category
export const updateCategory = (payload) => {
    return axios({
        method: 'put',
        url: `${route}category/${payload.id}`,
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

//Delete a category
export const deleteCategory = (payload) => {
    return axios({
        method: 'delete',
        url: `${route}category/${payload}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

//Subcategory Controller Requests
export const createSubcategory = (payload) => {
    return axios({
        method: 'post',
        url: `${route}subcategory`,
        data: {
            SubCategoryName: payload.name,
            CategoryID: payload.id
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

//Get subcategory list
export const getSubcategory = () => {
    return axios({
        method: 'get',
        url: `${route}subcategory`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        },

    })
}

//Update a subcategory
export const updateSubcategory = (payload) => {
    return axios({
        method: 'put',
        url: `${route}subcategory/${payload.id}`,
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

//Delete a subcategory
export const deleteSubcategory = (payload) => {
    return axios({
        method: 'delete',
        url: `${route}subcategory/${payload}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

// Product Controller Create Requests
export const createProducts = (payload) => {
    return axios({
        method: 'post',
        url: `${route}products`,
        data: payload,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        },
    }).catch(err => console.error(err))
}

// Product Controller Get Request
export const getProducts = (signal) => {
    try {
        return axios({
            method: 'get',
            url: `${route}products`,
            cancelToken: signal.token
        })
    }
    catch (error) {
        if (axios.isCancel(error)) {
            console.log(error)
        }
    }
}

// Product Controller Get Request By ID
export const getProductMinById = (payload) => {
    return axios({
        method: 'get',
        url: `${route}productbyid/${payload}`
    }).catch(err => console.error(err))
}

//Product controller Update request
export const updateProduct = (payload, id) => {
    return axios({
        method: 'put',
        url: `${route}products/${id}`,
        data: payload,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}
//Product controller delete request
export const deleteProduct = (payload) => {
    return axios({
        method: 'delete',
        url: `${route}products/${payload}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}

//Customers
export const getCustomersList = () => {
    return axios({
        method: 'get',
        url: `${route}usercontroller/customerslist`,
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        },
        withCredentials: true
    }).catch(err => console.error(err))
}

//Change Order Status
export const updateOrderStatus = (payload) => {
    return axios({
        method: 'put',
        url: `${route}orders/orderstatus`,
        data: payload,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}