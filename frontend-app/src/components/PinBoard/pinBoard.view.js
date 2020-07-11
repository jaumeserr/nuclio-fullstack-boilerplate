import React, {useState, useEffect} from 'react';
import styles from "../FormBoard/formBoard.module.css";

const PinBoard = () => {

    const [note, setNote] = useState('');
    const [mediaUrl, setMediaUrl] = useState('');
    const [boardId, setBoardId] = useState('');
    const [boards, setBoards] = useState([]);
    const [pinColor, setPinColor] = useState([]);

    const handleChangeNote = (e) => {
        setNote(e.target.value);
    }

    const handleChangeMediaUrl = (e) => {
        setMediaUrl(e.target.value);
    }

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
                setBoards(payload);
            })
            .catch(error => console.log(error));
    }, []);

    const submitDataPin = () => {
        const url = 'http://localhost/api/pins/';
        const body = {
            note,
            media_url: mediaUrl,
            board_id: boardId,
            color: pinColor
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
                console.log(response.status);
                if (response.status >= 200 || response.status < 300) {
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                console.log('Pin saved');
                console.log(payload);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.__container}>
            <h2 className={styles.__title}>Crear Pin</h2>
            <label className={styles.__label}>Añade título</label>
            <input className={styles.__input} value={note} type={'text'} placeholder={'Título'} onChange={handleChangeNote} />
            <label className={styles.__label}>Color del Pin</label>
            <select className={styles.__input} onChange={(e) => setPinColor(e.target.value)} >
                <option value="">Escoge Color</option>
                <option value="Black">Negro</option>
                <option value="Blue">Azul</option>
                <option value="Red">Rojo</option>
                <option value="Yellow">Amarillo</option>
                <option value="Green">Verde</option>
            </select>
            <label className={styles.__label}>Url</label>
            <input className={styles.__input} value={mediaUrl} type={'text'} placeholder={'Introduce una URL válida'} onChange={handleChangeMediaUrl} />
            <label className={styles.__label}>Board Id</label>
            <select className={styles.__input} value={boardId} onChange={(e) => setBoardId(e.target.value)} >
                <option value="">Escoge Tablero</option>
                {boards && boards.map(board => {
                    const { id, name } = board

                    return(
                        <option key={id} value={id}>{name}</option>
                    );
                })}
            </select>
            <input className={styles.__submit} type={'submit'} value={'Crear'} onClick={submitDataPin} />
        </div>
    );
};

export default PinBoard;