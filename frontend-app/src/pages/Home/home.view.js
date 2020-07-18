import React from "react";
import styles from './home.module.css';
import NavBar from "../../components/NavBar/navbar.view";
import ListPinCard from "../../components/ListPinCard/listPinCard.view";
import FormBoard from "../../components/BoardForm/boardForm.view";
import PinBoard from "../../components/PinForm/pinForm.view";
import ListBoards from "../ListBoards/listBoards.view";
import Login from "../../components/Login/login.view";

const Home = () => {
    
    return (
        <div className={styles.__container}>
            <NavBar />
            <ListPinCard />
            <Login />
            <ListBoards />
            <FormBoard />
            <PinBoard />
        </div>
    );
};

export default Home;