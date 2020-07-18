import React from 'react';
import styles from './navbar.module.css';
import ButtonText from "../ButtonText/buttonText.view";
import ButtonIcon from "../ButtonIcon/buttonIcon.view";
import SearchBar from "../SearchBar/searchBar.view";
import logo from '../../assets/pinterest_logo.png';
import bell from '../../assets/bell-solid.png';
import message from '../../assets/comment-dots-solid.png';
import user from '../../assets/user-circle-solid.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom';
import ListBoards from "../../pages/ListBoards/listBoards.view";
import ListPinCard from "../ListPinCard/listPinCard.view";

const NavBar = () => {
    return (
        <div className={styles.__container}>
            <div className={styles.__wrapper}>
                <Router>
                    <Link to={'/'}><ButtonIcon backgroundImage={logo} /></Link>
                    <ButtonText type={'button'} textButton={'Inicio'} backgroundColor={'black'} textColor={'white'} />
                    <ButtonText type={'button'} textButton={'Siguiendo'} />
                    <SearchBar />
                    <ButtonIcon backgroundImage={bell} />
                    <ButtonIcon backgroundImage={message} />
                    <Link to={'/boards'}><ButtonIcon backgroundImage={user} /></Link>
                    <Switch>
                        <Route path={'/'} children={<ListPinCard />} />
                        <Route path="/boards" children={<ListBoards />} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default NavBar;