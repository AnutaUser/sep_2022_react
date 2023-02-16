import React from "react";

import css from './CarsPage.module.css';
import {CarForm, Cars} from "../../components";
import {useSelector} from "react-redux";

const CarsPage = () => {

    const {loading} = useSelector(state => state.cars);

    return (
        <div className={css.CarsPage}>
            <CarForm/>
            <div className={css.hr}></div>
            {!!loading && <h1>LOADING ................</h1>}
            <Cars/>
        </div>
    );
};

export {
    CarsPage
};
