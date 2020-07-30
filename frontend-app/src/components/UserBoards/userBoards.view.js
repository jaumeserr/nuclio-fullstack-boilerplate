import React, {useEffect, useState} from 'react';
import styles from "./userBoards.module.css";

const UserBoards = () => {
    const [listBoards, setListBoards] = useState('');

    useEffect(() => {
        const url = 'http://localhost/api/boards/user/21';
        const options = {
            method: 'GET',
            header: new Headers(),
            mode: 'cors',
        };

        fetch(url, options)
            .then(response => {
                if (response.status >= 200 || response.status < 300) {
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                setListBoards(payload);
                console.log(payload);
            })
            .catch(error => console.log(error));
    }, []);

    return(
        <div className={styles.__container}>
            <div className={styles.__listBoards}>
                {listBoards && listBoards.map(listBoard => {
                    const { id, name, pins } = listBoard
                    return(
                        <div key={id}>
                            <div className={styles.__container__board}>
                                <div 
                                    className={styles.__container__board__img01}
                                    style={{ backgroundImage: `url(${listBoards[2].pins[0].media_url})` }} >
                                </div>
                                <div>
                                    <div className={styles.__container__board__img02}></div>
                                    <div className={styles.__container__board__img03}></div>
                                </div>
                            </div>
                            <p className={styles.__title}>{name}</p>
                            <p className={styles.__subtitle}>{pins.length} Pins</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UserBoards;