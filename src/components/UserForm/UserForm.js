import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';

import {usersRequests} from '../../api';
import {userValidator} from '../../validators';

const UserForm = ({setUsers, updateUser}) => {

    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const submit = async (user) => {
        const {data} = await usersRequests.create(user);
        setUsers(prev => [...prev, data]);
        reset();
    };

    useEffect(() => {
        if (updateUser) {
            setValue('name', updateUser.name);
            setValue('username', updateUser.username);
        }
    }, [updateUser, setValue]);

    const update = async (user) => {
        const {data} = await usersRequests.update(user.id, user);
        console.log(data);

        if (data) {
            const  {data} = await usersRequests.getAll();
            setUsers(data);
        }
    };

    return (
        <div style={{textAlign: 'center'}}>
            <form onSubmit={handleSubmit(!!updateUser ? update : submit)}>
                <div style={{display:'flex'}}>
                    <input type="text" placeholder={'name'} {...register('name')}/>
                    {errors.name && <span>{errors.name.message}</span>}
                </div>

                <div style={{display:'flex'}}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    {errors.username && <span>{errors.username.message}</span>}
                </div>

                <button disabled={!isValid}>{!!updateUser ? 'update' : 'create'}</button>
            </form>
        </div>
    );
};

export {UserForm};
