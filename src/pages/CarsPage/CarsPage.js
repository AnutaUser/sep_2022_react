import React from "react";

import css from './CarsPage.module.css';
import {CarForm, Cars} from "../../components";

const CarsPage = () => {

    return (
        <div className={css.CarsPage}>
            <CarForm/>
            <div className={css.hr}></div>
            <Cars/>
        </div>
    );
};

export {
    CarsPage
};
