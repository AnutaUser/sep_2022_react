import React from "react";

import {useAppReducer} from "../../hooks";
import {carActions} from "../../reducers";

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const [, dispatch] = useAppReducer(value => value.carReducer);


    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.DELETE_BY_ID(id))}>delete {brand}</button>
        </div>
    );
};

export {
    Car
};
