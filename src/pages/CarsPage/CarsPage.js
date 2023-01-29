import React, {useState} from "react";

import css from './CarsPage.module.css';
import {CarForm, Cars} from "../../components";

const CarsPage = () => {

    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    return (
        <div className={css.CarsPage}>
            <CarForm setCars={setCars} updateCar={updateCar}/>
            <div className={css.CarsPageHr}></div>
            <Cars cars={cars} setCars={setCars} setUpdateCar={setUpdateCar}/>
        </div>
    );
};

export {
    CarsPage
};
