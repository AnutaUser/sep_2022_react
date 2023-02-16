import React from "react";

import css from './Header.module.css';
import {NavLink} from "react-router-dom";

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
