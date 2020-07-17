import React, {useState, useEffect} from 'react';
import styles from './listBoards.module.css';
import User from '../../components/User/user.view';
import ButtonIcon from '../../components/ButtonIcon/buttonIcon.view';
import ButtonText from '../../components/ButtonText/buttonText.view';
import Edit from '../../assets/pen-solid.png';
import Add from '../../assets/plus-solid.png';
import Share from '../../assets/share-alt-solid.png';
import Settings from '../../assets/sliders-h-solid.png'
import CreatePopup from '../../components/CreatePopup/createPopup.view';

const ListBoards = () => {
    
    const [open, setOpen] = useState(false);
    const [listBoards, setListBoards] = useState('');

    const clickMe = () => {
        setOpen(true)
    }

    useEffect(() => {
        const url = 'http://localhost/api/boards/user/1';
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
                console.log(payload);
                setListBoards(payload);
            })
            .catch(error => console.log(error));
    }, []);
    
    return (
        <div className={styles.__container}>
            <User />
            <div className={styles.__toolBar}>
                <ButtonIcon backgroundImage={Edit} />
                <ButtonIcon backgroundImage={Share} />
                <div className={styles.__toolBar__center}>
                    <ButtonText type={'button'} textButton={'Tableros'} backgroundColor={'black'} textColor={'white'} />
                    <ButtonText type={'button'} textButton={'Pines'} />
                </div>
                <ButtonIcon backgroundImage={Settings} />
                {/* <ButtonIcon backgroundImage={Add} handleClick={setOpen}/> */}
                <ButtonIcon backgroundImage={Add} />
            </div>
            <CreatePopup />
            <div className={styles.__listBoards}>
                {listBoards && listBoards.map(listBoard => {
                    const { id, name, pins } = listBoard
                    
                    return(
                        <div key={id}>
                            <div className={styles.__container__board}>
                                <div className={styles.__container__board__img01}></div>
                                <div>
                                    <div className={styles.__container__board__img02}></div>
                                    <div className={styles.__container__board__img03}></div>
                                </div>
                            </div>
                            <p className={styles.__title}></p>
                            <p className={styles.__subtitle}>Pins</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListBoards;