import React from "react";
import styles from './home.module.css';
import NavBar from "../../components/NavBar/navbar.view";
import ListPinCard from "../../components/ListPinCard/listPinCard.view";
import FormBoard from "../../components/FormBoard/formBoard.view";

const Home = () => {
    return (
        <div>
            <NavBar />
            <ListPinCard />
            <FormBoard />
        </div>
    );
};

export default Home;