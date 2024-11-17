let productList = [];
const detail = document.querySelector('.item-detail')
function loadProducts() {
        productList.forEach((product) => {
            const itemDetail = document.createElement('div')
            itemDetail.classList.add('item-detail-flex')
            itemDetail.innerHTML = `
                <div class="item-media">
                    <img class="item-detail-image" src="${product.image}" alt="Item-detail">
                </div>
                <div class="item-info">
                    <div class="item-detail-title"><h1>${product.productName}</h1></div>
                    <div class="item-detail-price">$${product.price}</div>
                    <div class="item-description">${product.description}</div>
                    <div class="add-cart-form">
                        
                    </div>
                </div>
        `
            detail.appendChild(itemDetail)
        })
    }

// async function loadNavbar () {
//     try {
//         const navbar = await fetch('../views/navbar.html')
//         document.querySelector('.header').innerHTML = await navbar.text()
//         init()
//     } catch (error) {
//         console.log(error)
//     }
// }
// loadNavbar() 
function init() {
    const url = window.location.pathname
    const params = url.split('/').pop()
    fetch(`http://localhost:4080/api/products/${params}`)
        .then(res => res.json())
        .then((res) => {
            productList.push(res);
            loadProducts()
        })
        .catch(e => console.log(e))
}

init()