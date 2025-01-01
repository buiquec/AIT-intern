import React from 'react'
import Cart from './elements/Cart'
import Logo from './elements/Logo'
export default function Header({ onLogoClick, onCartClick, onCartNumberChange }) {
    return (
        <div className='header'>
            <Logo onClick={onLogoClick} />
            <Cart onClick={onCartClick}
                cartNumber={onCartNumberChange}
            />
        </div>
    )
}
