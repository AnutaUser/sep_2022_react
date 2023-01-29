import React, {useEffect} from "react";

import css from './Cars.module.css';
import {carsRequests} from "../../api";
import {Car} from "../Car/Car";

const Cars = ({cars, setCars, setUpdateCar}) => {

    useEffect(() => {
        carsRequests.getAll().then(({data}) => setCars(data));
    }, []);

    return (
        <div className={css.Cars}>
            {!!cars.length && cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setCars={setCars}/>)}
        </div>
    );
};

export {
    Cars
};
