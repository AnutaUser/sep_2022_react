import React from "react";

import {useAppReducer} from "../../hooks";
import {Car} from "../Car/Car";

const Cars = () => {

    const [cars] = useAppReducer(value => value.carReducer);


    return (
        <div>
            {
                !!cars.length && cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {
    Cars
};
