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

// Product Controller Requests
export const createProducts = (payload) => {
    return axios({
        method: 'post',
        url: `https://localhost:44376/api/products`,
         data: payload,
        //{
        //     id: payload.id,
        //     name: payload.name,
        //     description: payload.description,
        //     vendor: payload.vendor,
        //     price: payload.price,
        //     priceBeforeDiscount: payload.priceBeforeDiscount,
        //     image1: payload.image1,
        //     image2: payload.image2,
        //     image3: payload.image3,
        //     shippingCharges: payload.shippingCharges,
        //     availability: payload.availability,
        //     stock: payload.stock,
        //     postingDate: payload.postingDate,
        //     updationDate: payload.updationDate,
        //     packageWeight: payload.packageWeight,
        //     subCategoryID: payload.subCategoryID,
        //     categoryID: payload.categoryID
        // },
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
        }
    }).catch(err => console.error(err))
}