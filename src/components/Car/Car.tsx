import React, {FC, ReactNode} from "react";

import css from './Car.module.css';
import {ICar} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {carActions} from "../../redax";
import {useAppDispatch} from "../../hoocks";

interface IProps {
    car: ICar;
    children?: ReactNode;
}

const Car: FC<IProps> = ({car}) => {

    const {id, brand, price, year} = car;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();

    return (
        <div className={css.Car}>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => navigate(id.toString(), {state:car})}>details</button>
            <button onClick={() => dispatch(carActions.setSelectedCar(car))}>update</button>
            <button onClick={() => appDispatch(carActions.deleteCar({id:id.toString()}))}>delete</button>
        </div>
    );
};

export {
    Car
};
