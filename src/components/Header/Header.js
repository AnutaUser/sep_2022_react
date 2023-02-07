import React from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {

    return (
        <div className={css.Header}>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'/users'}>USERS</NavLink>
            <NavLink to={'/photos'}>PHOTOS</NavLink>
        </div>
    );
};

export {
    Header
};
