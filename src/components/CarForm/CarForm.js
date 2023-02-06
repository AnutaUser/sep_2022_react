import React from "react";
import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks";
import {carActions} from "../../reducers";

const CarForm = () => {

    const {register, reset, handleSubmit} = useForm();

    const [, dispatch] = useAppReducer(value => value.carReducer);

    const saveCar = (newCar) => {
        dispatch(carActions.ADD(newCar));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveCar)}>
                <div><input type="text" placeholder={'brand'} {...register('brand')}/></div>
                <div><input type="text" placeholder={'price'} {...register('price')}/></div>
                <div><input type="text" placeholder={'year'} {...register('year')}/></div>
                <button>Save car</button>
            </form>
        </div>
    );
};

export {
    CarForm
};
