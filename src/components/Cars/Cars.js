import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './Cars.module.css';
import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state['cars']);

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch]);

    return (
        <div className={css.Cars}>
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
};
