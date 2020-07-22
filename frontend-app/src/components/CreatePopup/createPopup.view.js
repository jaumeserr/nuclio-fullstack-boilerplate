import React from 'react';
import styles from './createPopup.module.css';
import { Link } from "react-router-dom";

const CreatePopup = () => {
    return (
        <div className={styles.__container}>
            <p className={styles.__title}>Crear</p>
            <Link to="/pin-builder" className={styles.__link}>Pin</Link>
            <Link to="/board-builder" className={styles.__link}>Tablero</Link>
        </div>
    );
};

export default CreatePopup;