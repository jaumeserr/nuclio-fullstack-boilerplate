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
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                console.log('Board Saved');
                console.log(payload);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.__container}>
            <h2 className={styles.__title}>Crear tablero</h2>
            <label className={styles.__label}>Nombre</label>
            <input className={styles.__input} type={'text'} placeholder={'Como "Lugares para ir" o "Recetas que hacer"'} onChange={handleChangeName}/>
            <label className={styles.__label}>Descripción</label>
            <textarea className={styles.__input__textArea} placeholder={'Introduce una breve descripción'} onChange={handleChangeDescription}></textarea>
            <label className={styles.__label}>User Id</label>
            <input className={styles.__input} type={'number'} placeholder={'Id'} onChange={handleChangeNumber}/>
            <input className={styles.__submit} type={'submit'} value={'Crear'} onClick={submitDataBoard} />
        </div>
    );
}

export default FormBoard;