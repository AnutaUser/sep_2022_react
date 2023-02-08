import React from "react";
import {useDispatch} from "react-redux";

import css from './Car.module.css';
import {carActions} from "../../redux";

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={css.Car}>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=> dispatch(carActions.deleteCar({id}))}>delete</button>
            <button onClick={() => dispatch(carActions.setSelectedCar(car))}>update</button>
        </div>
    );
};

export {
    Car
};
