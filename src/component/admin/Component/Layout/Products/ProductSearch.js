import React from 'react'

const ProductSearch = (props) => {
    //Search Button Click Event
    const handleSearchInput = () => {
        if (props.searchInput.current.value !== '') {
            const newList = props.originalProduct.filter(item => {
                const lc = item.name.toLowerCase()
                const filter = props.searchInput.current.value.toLowerCase()
                return lc.includes(filter)
            })
            props.submitsearch(newList)
        }
    }
    return (
        <div className="my-3">
            <div className="form-inline">
                <input type="text" className="form-control form-control-lg mr-2"
                    placeholder="Search Product" ref={props.searchInput}
                    onChange={(e) => props.inputEmpty(e)} />
                <button className="btn btn-lg btn-outline-secondary"
                    onClick={() => handleSearchInput()}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default ProductSearch;
