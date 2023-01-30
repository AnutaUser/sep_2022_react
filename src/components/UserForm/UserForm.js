import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './UserForm.module.css';
import {userValidator} from "../../validators";

const UserForm = ({setUsers, updateUser, setUpdateUser}) => {

    const {register, reset, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator),
    });

    useEffect(() => {
        if (updateUser) {
            setValue('name', updateUser.name);
            setValue('surname', updateUser.surname);
            setValue('age', updateUser.age);
        }
    }, [updateUser, setValue]);

    const submit = (user) => {

        if (updateUser) {

            setUsers(prevState => {
                const find = prevState.find(value => value.id === updateUser.id);
                Object.assign(find, user);
                return [...prevState];
            });
            setUpdateUser(null);

        }else {

            setUsers(prev => {
                const [prevUser] = prev.slice(-1);
                const id = prevUser ? prevUser.id + 1 : 0;
                return [...prev, {...user, id}];
            });
        }
        reset();
    };

    return (
        <div className={css.UserForm}>
            <form onSubmit={handleSubmit(submit)}>

                <div className={css.UserFormEach}>
                    <div><input type="text" placeholder={'name'} {...register('name')}/></div>
                    {errors.name && <span>{errors.name.message}</span>}
                </div>

                <div className={css.UserFormEach}>
                    <div><input type="text" placeholder={'surname'} {...register('surname')}/></div>
                    {errors.surname && <span>{errors.surname.message}</span>}
                </div>

                <div className={css.UserFormEach}>
                    <div><input type="number" placeholder={'age'} {...register('age')}/></div>
                    {errors.age && <span>{errors.age.message}</span>}
                </div>

                <button disabled={!isValid}>{!!updateUser ? 'update' : 'create'}</button>

            </form>
        </div>
    );
};

export {
    UserForm
};
