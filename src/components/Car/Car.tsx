import React, {FC, ReactNode} from "react";

import css from './Car.module.css';
import {ICar} from "../../interfaces";

interface IProps {
    car: ICar;
    children?: ReactNode;
}

const Car: FC<IProps> = ({car}) => {

    const {id, brand, prise, year} = car;

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>prise: {prise}</div>
            <div>year: {year}</div>
            <button>details</button>
        </div>
    );
};

export {
    Car
};
