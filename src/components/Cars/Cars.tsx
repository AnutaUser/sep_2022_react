import React, {FC, useEffect, useState} from "react";

import css from './Cars.module.css';
import {ICar} from "../../interfaces";
import {carService} from "../../api";
import {Car} from "../Car/Car";

const Cars:FC = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, []);

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
