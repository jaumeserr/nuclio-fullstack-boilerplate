import React from "react";
import styles from './searchBar.module.css';

const SearchBar = () => {
    return (
        <div>
            <input
                type={'text'}
                placeholder={'Buscar'}
                className={styles.__searchBar}
            />
        </div>
    );
};

export default SearchBar;