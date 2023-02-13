import React from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './LoginForm.module.css';
import {userValidator} from "../../validators";
import {loginActions} from "../../redux";

const LoginForm = () => {

    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator),
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (userCredentials) => {
        console.log(userCredentials);
        dispatch(loginActions.logIn(userCredentials));
        navigate('/cars');
        reset();
    };

    return (
        <div className={css.LoginForm}>
            <form onSubmit={handleSubmit(loginUser)}>
                <div className={css.LoginFormInput}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    {errors.username && <span>{errors.username.message}</span>}
                </div>

                <div className={css.LoginFormInput}>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button disabled={!isValid}>login</button>
            </form>

            {/*{*/}
            {/*    error?.detail && <div>{error.detail}</div>*/}
            {/*}*/}

        </div>
    );
};

export {
    LoginForm
};
