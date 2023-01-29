import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './CarForm.module.css';
import {carValidator} from "../../validators";
import {carsRequests} from "../../api";

const CarForm = ({setCars, updateCar}) => {

    const {register, reset, handleSubmit, setValue, formState:{errors, isValid}} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator),
    });

    const submit = async (value) => {
        const {data} = await carsRequests.create(value);
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

    const update = async (value) => {
        const {data} = await carsRequests.update(updateCar.id, value);
        if (Object.keys(data).length) {
            const {data} = await carsRequests.getAll();
            setCars(data);
        }
        reset();
    };

    return (
        <div className={css.CarForm}>
            <form onSubmit={handleSubmit(updateCar ? update : submit)}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div><input type="text" placeholder={'brand'} {...register('brand')}/></div>
                    {errors.brand && <span>{errors.brand.message}</span>}
                </div>

                <div style={{display:'flex', justifyContent:'center'}}>
                    <div><input type="text" placeholder={'price'} {...register('price')}/></div>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>

                <div style={{display:'flex', justifyContent:'center'}}>
                    <div><input type="text" placeholder={'year'} {...register('year')}/></div>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>

                <button disabled={!isValid}>{updateCar ? 'update' : 'create'}</button>
            </form>
        </div>
    );
};

export {
    CarForm
};
