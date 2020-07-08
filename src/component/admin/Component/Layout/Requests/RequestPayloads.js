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
    }).catch(err => console.error(err))
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
    }).catch(err => console.error(err))
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