

async function loadNavbar () {
    try {
        const navbar = await fetch('../views/navbar.html')
        document.querySelector('.header').innerHTML = await navbar.text()
    } catch (error) {
        console.log(error)
    }
}
loadNavbar() 