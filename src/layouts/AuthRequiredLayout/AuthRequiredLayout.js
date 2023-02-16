import React from "react";
import {Outlet} from "react-router-dom";

import css from './AuthRequiredLayout.module.css';

const AuthRequiredLayout = () => {

    return (
        <div className={css.AuthRequiredLayout}>
            <Outlet/>
        </div>
    );
};

export {
    AuthRequiredLayout
};
