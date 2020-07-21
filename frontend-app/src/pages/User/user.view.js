import React from 'react';
import UserInfo from "../../components/UserInfo/userInfo.view";
import UserBoards from "../../components/UserBoards/userBoards.view";

const User = () => {
    return(
        <div>
            <UserInfo />
            <UserBoards />
        </div>
    );
};

export default User;