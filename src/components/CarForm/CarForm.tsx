import React, {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hoocks";
import {carActions} from "../../redax";

const CarForm: FC = () => {

    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator),
    });
    const dispatch = useAppDispatch();

    const {carForUpdate} = useAppSelector(state => state.carReducer);

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}));
        reset();
    };

    useEffect(() => {
        if (!!carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [setValue, carForUpdate]);

    const update: SubmitHandler<ICar> = async (updCar) => {
        if (carForUpdate) {
            await dispatch(carActions.updateCar({id: String(carForUpdate.id), updCar}));
        }
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <div>
                    <input type="text" placeholder={'brand'} {...register('brand')}/>
                    {!!errors.brand && <div>{JSON.stringify(errors.brand.message)}</div>}
                </div>
                <div>
                    <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                    {!!errors.price && <div>{JSON.stringify(errors.price.message)}</div>}
                </div>
                <div>
                    <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                    {!!errors.year && <div>{JSON.stringify(errors.year.message)}</div>}
                </div>

                <button disabled={!isValid}>{!!carForUpdate ? 'update' : 'save'}</button>
            </form>
        </div>
    );
};

export {
    CarForm
};
