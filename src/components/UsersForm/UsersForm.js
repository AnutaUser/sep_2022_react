import React from "react";
import {useForm} from "react-hook-form";
import {useAppReducer} from "../../hooks";
import {userActions} from "../../reducers";

const UsersForm = () => {

    const {register, reset, handleSubmit} = useForm();
    const [, dispatch] = useAppReducer(value => value.userReducer);

    const save = (user) => {
        dispatch(userActions.ADD(user));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <div><input type="text" placeholder={'name'} {...register('name')}/></div>
                <div><input type="text" placeholder={'surname'} {...register('surname')}/></div>
                <div><input type="number" placeholder={'age'} {...register('age', {valueAsNumber: true})}/></div>
                <div><input type="text" placeholder={'status'} {...register('status')}/></div>
                <button>save user</button>
            </form>
        </div>
    );
};

export {
    UsersForm
};
