import React from "react";
import styles from './buttonIcon.module.css';

const ButtonIcon = ({backgroundImage}) => {

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
            </div>
        </div>
    );
};

export default ButtonIcon;