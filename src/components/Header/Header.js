import React from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {

    return (
        <div className={css.Header}>
            <NavLink to={''}>HOME</NavLink>
            <NavLink to={'cars'}>CARS</NavLink>
            <NavLink to={'users'}>USERS</NavLink>
        </div>
    );
};

export {
    Header
};
