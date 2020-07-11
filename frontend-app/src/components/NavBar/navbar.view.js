import React from 'react';
import styles from './navbar.module.css';
import ButtonText from "../ButtonText/buttonText.view";
import ButtonIcon from "../ButtonIcon/buttonIcon.view";
import SearchBar from "../SearchBar/searchBar.view";
import logo from '../../assets/pinterest_logo.png';
import bell from '../../assets/bell-solid.png';
import message from '../../assets/comment-dots-solid.png';
import user from '../../assets/user-circle-solid.png';

const NavBar = () => {
    return (
        <div className={styles.__container}>
            <div className={styles.__wrapper}>
                <ButtonIcon backgroundImage={logo} />
                <ButtonText type={'button'} textButton={'Inicio'} backgroundColor={'black'} textColor={'white'} />
                <ButtonText type={'button'} textButton={'Siguiendo'} />
                <SearchBar />
                <ButtonIcon backgroundImage={bell} />
                <ButtonIcon backgroundImage={message} />
                <ButtonIcon backgroundImage={user} />
            </div>
        </div>
    );
};

export default NavBar;