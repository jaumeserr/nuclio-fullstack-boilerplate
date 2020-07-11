import React from "react";
import styles from './home.module.css';
import NavBar from "../../components/NavBar/navbar.view";
import ListPinCard from "../../components/ListPinCard/listPinCard.view";
import FormBoard from "../../components/FormBoard/formBoard.view";
import PinBoard from "../../components/PinBoard/pinBoard.view";
import ListBoards from "../ListBoards/listBoards.view";

const Home = () => {
    
    return (
        <div className={styles.__container}>
            <NavBar />
            <ListPinCard />
            <ListBoards />
            <FormBoard />
            <PinBoard />
        </div>
    );
};

export default Home;