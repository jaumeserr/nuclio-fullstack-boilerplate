import React, {useState} from 'react';
import styles from './formBoard.module.css';

const FormBoard = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [userId, setUserId] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleChangeNumber = (e) => {
        setUserId(e.target.value);
    }

    const submitDataBoard = () => {

        const url = 'http://localhost/api/boards/';
        const body = {
            // name: name
            name,
            description,
            user_id: userId
        };

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(body),
            mode: 'cors',
        }

        fetch(url, options)
            .then(response => {
                if (response.status >= 200 || response.status < 300) {
                    console.log(`status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                console.log(payload);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.__container}>
            <input type={'text'} placeholder={'Nombre'} onChange={handleChangeName}/>
            <textarea placeholder={'Descripción'} onChange={handleChangeDescription}></textarea>
            <input type={'number'} placeholder={'Id'} onChange={handleChangeNumber}/>
            <input type={'button'} value={'Submit'} onClick={submitDataBoard}/>
        </div>
    );
}

export default FormBoard;