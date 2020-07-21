import React from "react";
import styles from './home.module.css';
import NavBar from "../../components/NavBar/navbar.view";
import ListPinCard from "../../components/ListPinCard/listPinCard.view";
import Login from "../../components/Login/login.view";
import PinForm from "../../components/PinForm/pinForm.view";
import BoardForm from "../../components/BoardForm/boardForm.view";
import User from "../User/user.view";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserBoards from "../../components/UserBoards/userBoards.view";
import UserInfo from "../../components/UserInfo/userInfo.view";
import UserActions from "../../components/UserActions/useractions.view";

const Home = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className={styles.__space}>
                    <Switch>
                        <Route exact path="/">
                            <ListPinCard />
                        </Route>
                        <Route path="/user">
                            <User />
                        </Route>
                        <Route path="/pin-builder">
                            <PinForm />
                        </Route>
                        <Route path="/board-builder">
                            <BoardForm />
                        </Route>
                        <Route path="/pin-user">
                            <UserInfo />
                            <UserActions />
                            <ListPinCard />
                        </Route>
                        <Route path="/board-user">
                            <UserInfo />
                            <UserActions />
                            <UserBoards />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Home;