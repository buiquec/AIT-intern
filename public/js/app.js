import indexController from "../controller/index-controller.js";
import cartController from "../controller/cart-controller.js";
import { renderDetailPage } from "./detail.js";
import { renderCart } from "./cart.js";
// create an empty array
document.addEventListener('DOMContentLoaded', () => {
    main()
    cartController.renderCartNumber()
})
let productList = []
const list = document.querySelector('.item-list')
const detail = document.querySelector('.item-detail')
const cart = document.querySelector('.cart-list')

async function main() {
    productList = await indexController.getAll()
    await showHomePage()
    await showDetailPage()
    await showCartPage()
    const headerLogo = document.querySelector('.title')
    headerLogo.addEventListener('click', async () => {
        list.style.display = 'grid'
        detail.style.display = 'none'
        cart.style.display = 'none'
    })
}

async function showHomePage() {
    list.innerHTML = productList.map((product) => {
        return `
        <div class="item">
            <div class="item-anchor" data-id="${product.productId}">
            <div class="item-image">
                <img class="image" src="${product.image}" alt="item">
            </div>
            <div class="item-name">${product.productName}</div>
            <div class="item-price">$${product.price}</div>
            </div>
        </div>`
    }).join(" ")
    
}

//render detail page
async function showDetailPage() {
    const itemElements = document.querySelectorAll('.item-anchor')
    itemElements.forEach((item) => {
        item.addEventListener('click', async () => {
            list.style.display = 'none'
            detail.style.display = 'flex'
            cart.style.display = 'none'
            const id = item.getAttribute('data-id')
            await renderDetailPage(productList, id)
        })
    })

}
//render cart page
async function showCartPage() {
    const cartLogo = cartController.getCartDOM()
    cartLogo.addEventListener('click', async () => {
        list.style.display = 'none'
        detail.style.display = 'none'
        cart.style.display = 'block'
        await renderCart(productList)
    })
}
