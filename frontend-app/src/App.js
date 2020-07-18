import React from 'react';
import Home from "./pages/Home/home.view";
import styles from "./components/NavBar/navbar.module.css";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ButtonIcon from "./components/ButtonIcon/buttonIcon.view";
import logo from "./assets/pinterest_logo.png";
import ButtonText from "./components/ButtonText/buttonText.view";
import SearchBar from "./components/SearchBar/searchBar.view";
import bell from "./assets/bell-solid.png";
import message from "./assets/comment-dots-solid.png";
import user from "./assets/user-circle-solid.png";
import ListPinCard from "./components/ListPinCard/listPinCard.view";
import ListBoards from "./pages/ListBoards/listBoards.view";
import Login from "./components/Login/login.view";

function App() {
    return (
        <Router>
            <div className="App">
                <div className={styles.__container}>
                    <div className={styles.__wrapper}>
                        <Link to={'/'}><ButtonIcon backgroundImage={logo} /></Link>
                        <ButtonText type={'button'} textButton={'Inicio'} backgroundColor={'black'} textColor={'white'} />
                        <ButtonText type={'button'} textButton={'Siguiendo'} />
                        <SearchBar />
                        <ButtonIcon backgroundImage={bell} />
                        <ButtonIcon backgroundImage={message} />
                        <Link to={'/boards'}><ButtonIcon backgroundImage={user} /></Link>
                        {/*<Switch>
                            <Route exact path={'/'} children={<ListPinCard />} />
                            <Route path="/boards" children={<ListBoards />} />
                        </Switch>*/}
                    </div>
                    <Login />
                </div>
            </div>
        </Router>
    );
}

export default App;
