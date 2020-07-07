import React from "react";
import styles from './pinCard.module.css';

const PinCard = ({image}) => {
    return (
        <div className={styles.__container}>
            <img src={image} className={styles.__image} />
            <p>Description</p>
            <p>Name</p>
        </div>
    );
};

export default PinCard;