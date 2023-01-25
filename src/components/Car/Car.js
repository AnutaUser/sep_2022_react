import React from 'react';

import {carService} from '../../services';

const Car = ({car, setUpdateCar, setCars}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id).then(async () => {
            const {data} = await carService.getAll();
            setCars([...data]);
        });
    };

    return (
        <div style={{border:'1px solid blue', width:'15vw'}}>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=> setUpdateCar(car)}>update</button>
            <button onClick={()=> deleteCar()}>delete</button>
        </div>
    );
};

export {Car};
