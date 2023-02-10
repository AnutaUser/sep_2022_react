import React from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {

    return (
        <div className={css.Header}>
            <div className={css.LogReg}>
                <NavLink to={'/login'}>login</NavLink>
                <NavLink to={'/register'}>register</NavLink>
            </div>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'/cars'}>CARS</NavLink>
        </div>
    );
};

export {
    Header
};
