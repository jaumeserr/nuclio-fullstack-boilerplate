import React from 'react';
import styles from './createPopup.module.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PinForm from "../PinForm/pinForm.view";
import BoardForm from "../BoardForm/boardForm.view";

const CreatePopup = () => {
    return (
        <Router>
            <div className={styles.__container}>
                <p className={styles.__title}>Crear</p>
                <Link to={'/pinform'} className={styles.__link}><a>Pin</a></Link>
                <Link to={'/boardform'} className={styles.__link}><a>Tablero</a></Link>
                <Switch>
                    <Route path={'/pinform'} children={<PinForm />} />
                    <Route path={'/boardform'} children={<BoardForm />} />
                </Switch>
            </div>
        </Router>
    );
};

export default CreatePopup;