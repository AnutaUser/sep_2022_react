import React from "react";
import {Outlet} from "react-router-dom";

import css from './UsersPage.module.css';
import {Users} from "../../components";

const UsersPage = () => {

    return (
        <div className={css.UsersPage}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {
    UsersPage
};
