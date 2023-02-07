import React from "react";

import css from './UsersPage.module.css';
import {UserDetails, Users} from "../../components";

const UsersPage = () => {

    return (
        <div className={css.UsersPage}>
            <Users/>
            <UserDetails/>
        </div>
    );
};

export {
    UsersPage
};
