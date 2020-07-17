import React from 'react';
import styles from './createPopup.module.css';

const CreatePopup = () => {
    return (
        <div className={styles.__container}>
            <p className={styles.__title}>Crear</p>
            <a className={styles.__link}>Pin</a>
            <a className={styles.__link}>Tablero</a>
        </div>
    );
};

export default CreatePopup;