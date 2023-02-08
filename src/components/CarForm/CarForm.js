import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import css from './CarForm.module.css';
import {carValidator} from "../../validators";
import {carActions} from "../../redux";

const CarForm = () => {

    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator),
    });

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    // console.log(carForUpdate.id);

    const create = async (car) => {
        await dispatch(carActions.create({car}));
        reset();
    };

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue]);

    const update = async (car) => {
        if (carForUpdate) {
            await dispatch(carActions.update({id:carForUpdate.id, car}));
        }
        reset();
    };

    return (
        <div className={css.CarForm}>
            <form onSubmit={handleSubmit(carForUpdate ? update : create)}>
                <div>
                    <input type="text" placeholder={'brand'} {...register('brand')}/>
                    {errors.brand && <span>{errors.brand.message}</span>}
                </div>
                <div>
                    <input type="number" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div>
                    <input type="number" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <button disabled={!isValid} className={css.Button}>{!!carForUpdate ? 'update' : 'create'}</button>
            </form>
        </div>
    );
};

export {
    CarForm
};
