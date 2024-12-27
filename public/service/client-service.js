const sendUpdateForm = async (id, data) => {
    try {
        const url = `http://localhost:9090/products/${id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export default sendUpdateForm