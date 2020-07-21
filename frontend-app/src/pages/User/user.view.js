import React from 'react';
import UserInfo from "../../components/UserInfo/userInfo.view";
import UserBoards from "../../components/UserBoards/userBoards.view";
import UserActions from "../../components/UserActions/useractions.view";

const User = () => {
    return(
        <div>
            <UserInfo />
            <UserActions />
            <UserBoards />
        </div>
    );
};

export default User;