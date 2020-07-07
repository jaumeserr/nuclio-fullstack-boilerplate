import React from "react";
import styles from './home.module.css';
import NavBar from "../../components/NavBar/navbar.view";
import ListPinCard from "../../components/ListPinCard/listPinCard.view";

const Home = () => {
    return (
        <div>
            <NavBar />
            <ListPinCard />
        </div>
    );
};

export default Home;