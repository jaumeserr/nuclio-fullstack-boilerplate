import React from 'react';
import styles from "./useractions.module.css";
import ButtonIcon from "../ButtonIcon/buttonIcon.view";
import Edit from "../../assets/pen-solid.png";
import Share from "../../assets/share-alt-solid.png";
import ButtonText from "../ButtonText/buttonText.view";
import Settings from "../../assets/sliders-h-solid.png";
import Add from "../../assets/plus-solid.png";
import CreatePopup from "../CreatePopup/createPopup.view";
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import UserBoards from "../UserBoards/userBoards.view";
import ListPinCard from "../ListPinCard/listPinCard.view";

const UserActions = () => {

    let { path, url } = useRouteMatch();

    return (
        <div className={styles.__container}>
            <div className={styles.__toolBar}>
                <ButtonIcon backgroundImage={Edit} />
                <ButtonIcon backgroundImage={Share} />
                <div className={styles.__toolBar__center}>
                    <Link to={`${url}/boards`}>
                        <ButtonText type={'button'} textButton={'Tableros'} backgroundColor={'black'} textColor={'white'} />
                    </Link>
                    <Link to={`${url}/pins`}>
                        <ButtonText type={'button'} textButton={'Pines'} />
                    </Link>
                </div>
                <ButtonIcon backgroundImage={Settings} />
                <ButtonIcon backgroundImage={Add} />
            </div>
            <CreatePopup />

            <Switch>
                <Route path={`${path}/boards`}>
                    <UserBoards />
                </Route>
                <Route path={`${path}/pins`}>
                    <ListPinCard />
                </Route>
            </Switch>
        </div>


    );
};

export default UserActions;