import React from 'react';

import {Car} from '../Car/Car';

const Cars = ({cars, setUpdateCar, setCars}) => {


    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', rowGap:'1vh'}}>
            { !!cars.length && cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setCars={setCars}/>)}
        </div>
    );
};

export {Cars};
