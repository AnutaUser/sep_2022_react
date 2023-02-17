import React, {FC, useEffect} from "react";

import css from './Cars.module.css';
import {Car} from "../Car/Car";
import {useAppDispatch, useAppSelector} from "../../hoocks";
import {carActions} from "../../redax";

const Cars:FC = () => {

    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch]);

    return (
        <div className={css.Cars}>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {
    Cars
};
