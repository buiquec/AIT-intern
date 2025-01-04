import React from 'react'
import Cart from './elements/Cart'
import Logo from './elements/Logo'
import Searchbar from './elements/Searchbar'
export default function Header({ onLogoClick, onCartClick, onCartNumberChange, onSearch }) {
    return (
        <div className='header'>
            <Logo onClick={onLogoClick} />
            <Searchbar
                onSearch={onSearch}
            />
            <Cart
                onClick={onCartClick}
                cartNumber={onCartNumberChange}
            />
        </div>
    )
}
