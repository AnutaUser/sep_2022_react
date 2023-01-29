import React from "react";

import css from './Car.module.css';
import {carsRequests} from "../../api";

const Car = ({car, setUpdateCar, setCars}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async (id) => {
        await carsRequests.delete(id);
        const {data} = await carsRequests.getAll();
        setCars([...data]);
    };

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> setUpdateCar(car)}>update</button>
            <button onClick={() => deleteCar(id)}>delete</button>
        </div>
    );
};

export {
    Car
};
