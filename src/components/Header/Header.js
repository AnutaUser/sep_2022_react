import React from "react";

import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className={css.Header}>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'/cars'}>CARS</NavLink>
        </div>
    );
};

export {
    Header
};
