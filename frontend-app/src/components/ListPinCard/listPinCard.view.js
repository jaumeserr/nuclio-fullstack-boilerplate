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
                if (response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                console.log('saved');
                setPins(payload);

            })
            .catch(error => console.log(error));
    }, [])



    return (
        <div className={styles.__container}>
            {pins && pins.map(pin => {
                const { note, media_url, color } = pin

                return (
                    <PinCard
                        note={note}
                        media_url={media_url}
                        color={color}
                    />
                )
            })}
        </div>
    );
};

export default ListPinCard;