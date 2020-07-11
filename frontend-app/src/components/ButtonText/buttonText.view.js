import React from "react";
import styles from './buttonText.module.css';

const ButtonText = ({backgroundColor, type, textButton, textColor}) => {

    const styleButton = {
        backgroundColor: backgroundColor,
        color: textColor,
    }

    return (
        <div>
            <input
                type={type}
                value={textButton}
                className={styles.__buttonText}
                style={styleButton}
            />
        </div>
    );
};

export default ButtonText;