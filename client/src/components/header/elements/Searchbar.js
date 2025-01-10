import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchKeyword } from '../../../features/search/searchSlice'
import { renderHome } from '../../../features/render/renderSlice'

export default function Searchbar() {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')
    const handleSearchClick = () => {
        dispatch(setSearchKeyword(inputValue))
        dispatch(renderHome())
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
