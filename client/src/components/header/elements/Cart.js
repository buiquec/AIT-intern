import React from 'react'

export default function Cart({onClick, cartNumber}) {
    
    return (
        <div onClick={onClick}>
            <div className="cart">
                <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                </svg>
                <span className="span">{cartNumber}</span>
            </div>
        </div>
    )
}
