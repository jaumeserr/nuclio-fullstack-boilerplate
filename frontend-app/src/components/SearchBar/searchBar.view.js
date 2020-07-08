import React from "react";
import styles from './searchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.__searchBar__container}>
            <input
                type={'text'}
                placeholder={'Buscar'}
                className={styles.__searchBar}
            />
        </div>
    );
};

export default SearchBar;