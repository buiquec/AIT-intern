import React from 'react'
import CartLogo from './elements/CartLogo'
import Logo from './elements/Logo'
import Searchbar from './elements/Searchbar'
import { useDispatch } from 'react-redux'
import { renderCart, renderHome } from '../../features/render/renderSlice'
import { clearSearchKeyword } from '../../features/search/searchSlice'
export default function Header() {
    const dispatch = useDispatch()
    const handleLogoClick = () => {
        dispatch(clearSearchKeyword())
        dispatch(renderHome())
    }
    const handleCartLogoClick = () => {
        dispatch(renderCart())
    }
    return (
        <div className='header'>
            <Logo onClick={handleLogoClick} />
            <Searchbar/>
            <CartLogo
                onClick={handleCartLogoClick}
            />
        </div>
    )
}
