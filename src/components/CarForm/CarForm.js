import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';

import {carValidator} from '../../validators';
import {carService} from '../../services';

const CarForm = ({setCars, updateCar}) => {

    const {register, reset, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    const update = async (car) => {
        const {data} = await carService.updateById(updateCar.id, car);
        if (Object.keys(data).length) {
            const {data} = await carService.getAll();
            setCars(data);
        }
    }

    const submit = async (car) => {
        const {data} = await carService.create(car);
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

    return (
        <div>
            <form onSubmit={handleSubmit(updateCar ? update : submit)}>
                <div style={{display:'flex'}}>
                    <input type="text" placeholder={'brand'} {...register('brand')}/>
                    {errors.brand && <span>{errors.brand.message}</span>}
                </div>

                <div style={{display:'flex'}}>
                    <input type="text" placeholder={'price'} {...register('price')}/>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>

                <div style={{display:'flex'}}>
                    <input type="text" placeholder={'year'} {...register('year')}/>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>

                <button disabled={!isValid}>{!!updateCar ? 'update' : 'create'}</button>
            </form>

            {/*<form onSubmit={handleSubmit(submit)}>*/}
            {/*    <div>*/}
            {/*        <input type="text" placeholder={'brand'} {...register('brand', {*/}
            {/*            pattern: {*/}
            {/*                value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,*/}
            {/*                message: 'Only letters from 1 to 20',*/}
            {/*            },*/}
            {/*            required: {value: true, message: 'Required field!'}*/}
            {/*        })}/>*/}
            {/*    </div>*/}
            {/*    {errors.brand && <span>{errors.brand.message}</span>}*/}

            {/*    <div>*/}
            {/*        <input type="text" placeholder={'price'} {...register('price', {*/}
            {/*                valueAsNumber: {value: true, message: 'Only number'},*/}
            {/*                required: {value: true, message: 'Required field'},*/}
            {/*                min: {value: 0.1, message: 'Min 0.1'},*/}
            {/*                max: {value: 1000000, message: 'Max 1 000 000'},*/}
            {/*            },*/}
            {/*        )}/>*/}
            {/*    </div>*/}
            {/*    {errors.price && <span>{errors.price.message}</span>}*/}

            {/*    <div>*/}
            {/*        <input type="text" placeholder={'year'} {...register('year', {*/}
            {/*                valueAsNumber: {value: true, message: 'Only number'},*/}
            {/*                required: {value: true, message: 'Required field'},*/}
            {/*                min: {value: 1990, message: 'Min 1990'},*/}
            {/*                max: {value: new Date().getFullYear(), message: `Max ${new Date().getFullYear()}`},*/}
            {/*            },*/}
            {/*        )}/>*/}
            {/*    </div>*/}
            {/*    {errors.year && <span>{errors.year.message}</span>}*/}

            {/*    <button>create</button>*/}
            {/*</form>*/}

        </div>
    );
};

export {CarForm};
