const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id)
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity
    }
}

const truncateString = (string, num) => {
    if (string?.length > num) {
        return string.slice(0, num) + '...';
    } else {
        return string
    }
}

const searchProducts = (products, search) => {
    if (!search) return products
    const searchedProducts = products.filter(product => product.title.toLowerCase().includes(search))
    return searchedProducts
}

const filterProducts = (products, category) => {
    if (!category) return products
    const filteredProducts = products.filter(product => product.category === category)
    return filteredProducts
}

const createQueryObject = (currentQuery, newQuery) => {
    if (newQuery.category === 'all products') {
        const { category, ...rest } = currentQuery
        return rest
    }
    if (newQuery.search === '') {
        const { search, ...rest } = currentQuery
        return rest
    }
    return { ...currentQuery, ...newQuery }
}

const getInitialQuery = (searchParams) => {
    const query = {}
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    if (category) query.category = category
    if (search) query.search = search
    return query
}

export { isInCart, quantityCount, truncateString, createQueryObject, searchProducts, filterProducts, getInitialQuery }