import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsRequest} from "../../api";
import {carValidator} from "../../validators";

const CarForm = ({setCars, updateCar}) => {

    const {register, reset, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator),
    });

    const submit = async (newCar) => {
        const {data} = await carsRequest.create(newCar);
        setCars(prev => [...prev, data]);
        reset();
    };

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand);
            setValue('price', updateCar.price);
            setValue('year', updateCar.year);
        }
    }, [updateCar, setValue]);

    const update = async (carForUpdate) => {
        const {data} = await carsRequest.update(updateCar.id, carForUpdate);
        if (Object.keys(data).length) {
            const {data} = await carsRequest.getAll();
            setCars(data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(!!updateCar ? update : submit)}>

                <div style={{display: 'flex'}}>
                    <div><input type="text" placeholder={'brand'} {...register('brand')}/></div>
                    {errors.brand && <span>{errors.brand.message}</span>}
                </div>

                <div style={{display: 'flex'}}>
                    <div><input type="number" placeholder={'price'} {...register('price')}/></div>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>

                <div style={{display: 'flex'}}>
                    <div><input type="number" placeholder={'year'} {...register('year')}/></div>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>

                <button disabled={!isValid}>{!!updateCar ? 'update' : 'create'}</button>

            </form>
        </div>
    );
};

export {
    CarForm
};
