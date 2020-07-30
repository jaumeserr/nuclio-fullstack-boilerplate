import React, { useState } from "react";
import styles from './pinCard.module.css';
import PinCardActionsView from "./PinCardActionsView/pinCardActions.view";

const PinCard = ({note, mediaUrl, color, boardId}) => {

    const borderImg = {
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: color
    }

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={styles.__container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.__image__container}>
                <img src={mediaUrl} className={styles.__image} style={borderImg} alt="pinImage"/>
                { isHovered && <PinCardActionsView note={note} boardId={boardId} mediaUrl={mediaUrl} /> }
            </div>
        </div>
    );
};

export default PinCard;