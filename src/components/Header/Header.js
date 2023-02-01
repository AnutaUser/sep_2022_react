import React from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAuthContext} from "../hooks";

const Header = () => {

    const {user, logout} = useAuthContext();

    return (
        <div className={css.Header}>
            <NavLink to={''}>HOME</NavLink>
            <NavLink to={'users'}>USERS</NavLink>
            <NavLink to={'posts'}>POSTS</NavLink>
            <NavLink to={'albums'}>ALBUMS</NavLink>
            {
             !!user &&
                <div>{user.toUpperCase()} <button onClick={()=> logout()}>log out</button></div>
            }
        </div>
    );
};

export {
    Header
};
