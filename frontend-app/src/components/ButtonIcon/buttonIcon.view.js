import React from "react";
import styles from './buttonIcon.module.css';
import CreatePopup from "../CreatePopup/createPopup.view";

const ButtonIcon = ({backgroundImage, handleClick}) => {

    const backgroundImg = {
        backgroundImage: `url(${backgroundImage})`,
    }

    return (
        <div>
            <div>
                <input
                    type={'button'}
                    className={styles.__buttonIcon}
                    style={backgroundImg}
                />
                {/* <button className={styles.__buttonIcon} style={backgroundImg} onClick={handleClick}>

                </button>
                {handleClick && <CreatePopup/>} */}
            </div>
        </div>
    );
};

export default ButtonIcon;