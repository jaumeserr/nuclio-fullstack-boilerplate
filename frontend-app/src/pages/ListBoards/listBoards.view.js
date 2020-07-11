import React, {useState, useEffect} from 'react';
import styles from './listBoards.module.css';

const ListBoards = () => {
    
    const [listBoards, setListBoards] = useState('');

    useEffect(() => {
        const url = 'http://localhost/api/boards';
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
                console.log(`Received ${payload.length} boards from DB`);
                console.log(payload);
                setListBoards(payload);
            })
            .catch(error => console.log(error));
    }, []);
    
    return (
        <div className={styles.__container}>
            <h2 style={{paddingTop: '100px'}}>Boards</h2>
            <img src="" />
            <div className={styles.__listBoards}>
                {listBoards && listBoards.map(listBoard => {
                    
                    const { id, name, pins } = listBoard

                    return(
                        <div key={id}>
                            <div className={styles.__container__board}>
                                <div className={styles.__container__board__img01} style={{backgroundImage: `url(${pins[0].media_url})`}}></div>
                                <div>
                                    <div className={styles.__container__board__img02} style={{backgroundImage: `url(${pins[1].media_url})`}}></div>
                                    <div className={styles.__container__board__img03} style={{backgroundImage: `url(${pins[2].media_url})`}}></div>
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
}

export default ListBoards;