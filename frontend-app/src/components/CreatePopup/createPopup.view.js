import React from 'react';
import styles from './createPopup.module.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PinForm from "../PinForm/pinForm.view";
import BoardForm from "../BoardForm/boardForm.view";

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