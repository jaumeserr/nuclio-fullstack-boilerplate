import React, {useState, useEffect} from "react";
import styles from './listPinCard.module.css';
import PinCard from "../PinCard/pinCard.view";

const ListPinCard = () => {

    const [pins, setPins] = useState();

    useEffect(() => {
        const url = 'http://localhost/api/pins';
        const options = {
            method: 'GET',
            header: new Headers(),
        };

        fetch(url, options)
            .then(response => {
                if (response.status >= 200 || response.status < 300) {
                    // console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                setPins(payload);
                console.log(payload);

            })
            .catch(error => console.log(error));
    }, [])



    return (
        <div className={styles.__container}>
            {pins && pins.map(pin => {
                const { note, media_url, color, id, board_id } = pin

                return (
                    <PinCard
                        key={id}
                        note={note}
                        mediaUrl={media_url}
                        color={color}
                        boardId={board_id}
                    />
                )
            })}
        </div>
    );
};

export default ListPinCard;