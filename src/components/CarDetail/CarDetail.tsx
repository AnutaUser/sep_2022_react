import React, {FC, ReactNode} from "react";

import {ICar} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    car: ICar;
    children?: ReactNode;
}

const CarDetail: FC<IProps> = ({car}) => {

    const {id, brand, price, year} = car;
    const navigate = useNavigate();

    return (
        <div>
            <div>ID -- {id}</div>
            <div>Brand -- {brand}</div>
            <div>Price -- {price}</div>
            <div>Year -- {year}</div>
            <button onClick={() => navigate('/cars')}>back</button>
        </div>
    );
};

export {
    CarDetail
};
