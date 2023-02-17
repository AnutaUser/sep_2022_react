import React, {FC} from "react";
import {Outlet} from "react-router-dom";

import css from './CarsPage.module.css';
import {CarForm, Cars} from "../../components";

const CarsPage: FC = () => {

    return (
        <div className={css.CarsPage}>
            <CarForm/>
            <div className={css.CarsPageHr}></div>
            <Cars/>
            <Outlet/>
        </div>
    );
};

export {
    CarsPage
};
