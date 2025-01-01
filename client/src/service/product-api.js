const productApi = {
    getAll: async () => {
        const response = await fetch('http://localhost:9090/products')
        const products = await response.json()
        return products
    },
    // getByID = async (id) => {
    //     const response = await fetch('../products.json')
    //     const products = await response.json()
    //     const product = products.find(item => item.productId === id)
    //     return product
    // }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default productApi