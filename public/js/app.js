import indexController from "../controller/product-controller.js";
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
    handleClickSearchButton()
    const headerLogo = document.querySelector('.title')
    headerLogo.addEventListener('click', async () => {
        showHomePage()
    })

}

async function showHomePage() {
    list.style.display = 'grid'
    detail.style.display = 'none'
    cart.style.display = 'none'
    list.innerHTML = productList.map((product) => {
        return `
        <div class="item" data-id="${product.productId}">
            <div class="item-anchor">
            <div class="item-image">
                <img class="image" src="${product.image}" alt="item">
            </div>
            <div class="item-name">${product.productName}</div>
            <div class="item-price">$${product.price}</div>
            </div>
        </div>`
    }).join(" ")

}

async function showSearchResults(keyword) {
    list.style.display = 'grid'
    detail.style.display = 'none'
    cart.style.display = 'none'
    if (keyword) {
        const searchResults = productList.filter((product) => {
            return product.productName.toLowerCase().includes(keyword)
        })
        list.innerHTML = searchResults.map((result) => {
            return `
                <div class="item" data-id="${result.productId}">
                    <div class="item-anchor">
                    <div class="item-image">
                        <img class="image" src="${result.image}" alt="item">
                    </div>
                    <div class="item-name">${result.productName}</div>
                    <div class="item-price">$${result.price}</div>
                    </div>
                </div>`
        }).join(" ")
    }
}

function handleClickSearchButton() {
    const searchBtn = document.getElementById('search-btn-header')
    const handleClickSearch = () => {
        const searchInput = document.getElementById('search-keyword')
        const keyword = searchInput.value.toLowerCase()
        console.log("Clicked")
        showSearchResults(keyword)
        searchInput.value = ''
    }
    searchBtn.addEventListener("click", handleClickSearch)
}

//render detail page
async function showDetailPage() {
    list.addEventListener('click', async (event) => {
        const item = event.target.closest('.item')
        if (item) {
            list.style.display = 'none'
            detail.style.display = 'flex'
            cart.style.display = 'none'
            const id = item.getAttribute('data-id')
            await renderDetailPage(productList, id)
        }
    });
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
