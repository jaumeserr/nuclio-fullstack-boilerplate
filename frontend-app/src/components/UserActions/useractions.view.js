import React from 'react';
import styles from "./useractions.module.css";
import ButtonIcon from "../ButtonIcon/buttonIcon.view";
import Edit from "../../assets/pen-solid.png";
import Share from "../../assets/share-alt-solid.png";
import ButtonText from "../ButtonText/buttonText.view";
import Settings from "../../assets/sliders-h-solid.png";
import Add from "../../assets/plus-solid.png";
import CreatePopup from "../CreatePopup/createPopup.view";
import { Link } from 'react-router-dom';

const UserActions = () => {
    return (
        <div className={styles.__container}>
            <div className={styles.__toolBar}>
                <ButtonIcon backgroundImage={Edit} />
                <ButtonIcon backgroundImage={Share} />
                <div className={styles.__toolBar__center}>
                    <Link to="/board-user"><ButtonText type={'button'} textButton={'Tableros'} backgroundColor={'black'} textColor={'white'} /></Link>
                    <Link to="/pin-user"><ButtonText type={'button'} textButton={'Pines'} /></Link>
                </div>
                <ButtonIcon backgroundImage={Settings} />
                <ButtonIcon backgroundImage={Add} />
            </div>
            <CreatePopup />
        </div>
    );
};

export default UserActions;