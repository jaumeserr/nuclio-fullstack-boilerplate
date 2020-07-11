import React from "react";
import styles from './pinCard.module.css';

const PinCard = ({note, mediaUrl, color, boardId}) => {

    const borderImg = {
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: color
    }

    return (
        <div className={styles.__container}>
            <img alt={'pinterest'} className={styles.__image} src={mediaUrl} style={borderImg}/>
            <p className={styles.__text}><strong>Nombre Pin:</strong> {note}</p>
            <p className={styles.__text}><strong>Board Id:</strong> {boardId}</p>
        </div>
    );
};

export default PinCard;