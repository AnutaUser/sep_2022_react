import React from "react";

import css from './UsersPage.module.css';
import {Users, UsersForm} from "../../components";

const UsersPage = () => {

    return (
        <div className={css.UsersPage}>
            <UsersForm/>

            <hr/>

            <Users/>
        </div>
    );
};

export {
    UsersPage
};
