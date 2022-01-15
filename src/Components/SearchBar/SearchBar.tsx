import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <input type="text" className={styles["search-bar"]} 
        placeholder="           Search"
        style={{border:"none"}}/>
    )
}

export default SearchBar