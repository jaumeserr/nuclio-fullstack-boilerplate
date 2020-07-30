import React from 'react';
import styles from './pinCardActions.module.css';

const PinCardActionsView = ({note, boardId, mediaUrl}) => {
    return (
        <div className={styles.__container}>
            <div className={styles.__topSection__container}>
                <div className={styles.__topSection}>
                    <div className={styles.__pinName}>{note}</div>
                    <div className={styles.__boardId}>Board Id: {boardId}</div>
                </div>
            </div>
            <div className={styles.__middleSection__container}></div>
            <div className={styles.__bottomSection__container}>
                <div className={styles.__bottomSection}>
                    <div>{mediaUrl}</div>
                </div>
            </div>
            {/* <div className={styles.__message}>I appear on hover</div> */}
        </div>
    );
};

export default PinCardActionsView;