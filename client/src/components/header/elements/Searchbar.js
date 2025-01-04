import React, { useState } from 'react'

export default function Searchbar({ onSearch }) {
    const [inputValue, setInputValue] = useState('')
    const handleSearchClick = () => {
        onSearch(inputValue)
    }
    return (
        <div className="search-input-header">
            <input
                type="text"
                id="search-keyword"
                placeholder="Search a product"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
            ></input>
            <button
                id="search-btn-header"
                onClick={handleSearchClick}
            >Search</button>
        </div>
    )
}
