import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header:FC = () => {

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
