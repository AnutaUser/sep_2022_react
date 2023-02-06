import React from "react";
import {Outlet} from "react-router";

import css from './MainLayout.module.css';
import {Header} from "../../components";

const MainLayout = () => {

    return (
        <div className={css.MainLayout}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
};
