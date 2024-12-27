import indexController from "../controller/product-controller.js"
import sendUpdateForm from "../service/client-service.js"

document.addEventListener('DOMContentLoaded', () => {
  main()
})

let productList = []
const dashboardTable = document.querySelector('.db-container')
const updateForm = document.querySelector('.update-form')

async function main() {
  productList = await indexController.getAll()
  await renderProductsToTable(productList)
  updateProductInfoToTable()
}

const renderProductsToTable = async (products = []) => {
  dashboardTable.style.display = 'block'
  updateForm.style.display = 'none'
  const tableBody = document.querySelector('.dashboard-body')
  tableBody.innerHTML = products.map(product => {
    return `
    <tr>
        <td class="tg-0lax">${product.productId}</td>
        <td class="tg-0lax">${product.productName}</td>
        <td class="tg-0lax">$${product.price}</td>
        <td class="tg-0lax">${product.type || 'not selected'}</td>
        <td class="tg-0lax">
        <button class="db-product-update" data-id="${product.productId}">Update</button>
        </td>
      </tr>
      `
  }).join(' ')

}

const updateProductInfoToTable = () => {
  const productUpdateBtn = document.querySelectorAll('.db-product-update')
  productUpdateBtn.forEach((element) => {
    element.addEventListener('click', () => {
      const clickedProductId = element.getAttribute('data-id')
      dashboardTable.style.display = 'none'
      updateForm.style.display = 'block'
      renderUpdateForm(+(clickedProductId))
    })
  })
}

const renderUpdateForm = (id) => {
  //FIND PRODUCT
  const product = productList.find(product => product.productId === id)
  //RENDER
  updateForm.innerHTML =
    `<form class="form-horizontal">
            <fieldset>
            <legend class="form-title">Update product</legend>
            <div class="form-group">
                <label class="col-md-4 control-label" for="product-name">Product ID</label>
                <div class="col-md-4"> <h5>${product.productId}</h5></div>  
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="product-name">Product Name</label>  
              <div class="col-md-4">
              <input id="product-name" name="product-name" type="text" value="${product.productName}"class="form-control input-md" required="">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="product-price">Price</label>  
              <div class="col-md-4">
              <input id="product-price" name="product-price" type="text" value="${product.price}"class="form-control input-md" required="">           
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="product-image">Image</label>  
              <div class="col-md-4">
              <input id="product-image" name="product-image" type="text" value="${product.image}"class="form-control input-md" required="">  
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="type">Type</label>
              <div class="col-md-4"> 
                <label class="radio-inline">
                  <input type="radio" name="type" value="Tops">
                  Tops
                </label> 
                <label class="radio-inline">
                  <input type="radio" name="type" value="Bottoms">
                  Bottoms
                </label>
              </div>
            </div>

            </fieldset>
            <div class="form-group">
              <label class="col-md-4 control-label"></label>
              <div class="col-md-8">
                <button type="submit" id="save-update-btn" class="btn btn-success">Save</button>
                <button type="button" id="cancel-update-btn" class="btn btn-danger">Cancel</button>
              </div>
            </div>
        </form>`
  //RENDER PRODUCT TYPES
  const productTypes = document.getElementsByName('type')
  Array.from(productTypes).forEach(input => {
    if (input.value === product.type) {
      input.checked = true
    }
  })
  //HANDLE CANCEL BUTTON
  const cancelUpdateBtn = document.querySelector('#cancel-update-btn')
  const form = document.querySelector('.form-horizontal')
  cancelUpdateBtn.addEventListener('click', () => {
    dashboardTable.style.display = 'block'
    updateForm.style.display = 'none'
  })
  
  //handle submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const productName = document.getElementById('product-name').value
    const productPrice = document.getElementById('product-price').value
    const productImage = document.getElementById('product-image').value

    const productType = Array.from(productTypes).find((type) => type.checked === true).value
    const data = { productName, price: productPrice, image: productImage, type: productType }

    await sendUpdateForm(id, data)
    alert('Item updated')
    main()
  })
}

