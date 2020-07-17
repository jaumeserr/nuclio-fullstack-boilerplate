import React, {useState, useEffect} from "react";
import styles from './searchBar.module.css';

const SearchBar = () => {

    const url = `http://localhost/api/search/blue`;
    const options = {
        method: 'GET',
        header: new Headers(),
        mode: 'cors',
    };

    fetch(url, options)
        .then(response => {
            if (response.status >= 200 || response.status < 300) {
                console.log(`Status: ${response.status}`);
                return response.json();
            }
            return Promise.reject(response.status);
        })
        .then(payload => {
            console.log(`Received ${payload.length} pins from DB`);
        })
        .catch(error => console.log(error));



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