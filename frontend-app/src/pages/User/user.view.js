import React from 'react';
import UserInfo from "../../components/UserInfo/userInfo.view";
import UserActions from "../../components/UserActions/useractions.view";

const User = () => {
    return(
        <div>
            <UserInfo />
            <UserActions />
        </div>
    );
};

export default User;