import React, {useState, useEffect} from 'react';
import styles from './user.module.css';
import userImg from '../../assets/user-circle-solid.png';

const User = () => {

    const [user, setUser] = useState('')

    useEffect(() => {
        const url = 'http://localhost/api/users/1';
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
                console.log(`Received ${payload.length} users from DB`);
                console.log(payload);
                setUser(payload);
            })
            .catch(error => console.log(error));
    }, []);

    const { bio, email, first_name, last_name, username } = user

    return (
        <div className={styles.__container}>
            <img src={userImg} className={styles.__image}/>
            <p className={styles.__title}>{username}</p>
            <p className={styles.__subtitle}>1 seguidor · Siguiendo a 5</p>
        </div>
    );
};

export default User;