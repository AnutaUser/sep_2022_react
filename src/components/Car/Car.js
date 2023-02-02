import React from "react";

import css from './Car.module.css';
import {carsRequest} from "../../api";

const Car = ({car, setUpdateCar, setCars}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carsRequest.delete(id).then(async() => {
            const {data} = await carsRequest.getAll();
            setCars([...data]);
        })
    };

    return (
        <div className={css.Car}>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button onClick={() => deleteCar()}>delete</button>
        </div>
    );
};

export {
    Car
};
