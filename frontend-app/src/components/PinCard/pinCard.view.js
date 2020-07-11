import React from "react";
import styles from './pinCard.module.css';

const PinCard = ({note, media_url, color}) => {

    return (
        <div className={styles.__container}>
            <img alt={'pinterest'} className={styles.__image} src={media_url} />
            <p className={styles.__text}>Description: {note}</p>
            <p>Color: {color}</p>
        </div>
    );
};

export default PinCard;