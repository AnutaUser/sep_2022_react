import React from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAuthContext} from "../hooks/useAuthContext";

const Header = () => {

    const {user, logOut} = useAuthContext();

    return (
        <div className={css.Header}>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'CARS'}>CARS</NavLink>
            {
               !!user &&
               <div className={css.UserBlock}>
                   <div className={css.User}>{user.username[0].toUpperCase()}</div>
                   <button onClick={() => logOut()} className={css.button}>logOut</button>
               </div>
            }
        </div>
    );
};

export {
    Header
};
