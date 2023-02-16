import React, {useState} from "react";
import {useForm} from "react-hook-form";

import css from './LoginForm.module.css';
import {useNavigate} from "react-router-dom";

import {authService} from "../../api";

const LoginForm = () => {

    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const loginUser = async (userCredentials) => {
        try {
            await authService.login(userCredentials);
            navigate('/cars');
        } catch (e) {
            if (e.response.status === 401) {
                setError(e.response.data);
            }
        }
    };

    return (
        <div className={css.LoginForm}>

            <form onSubmit={handleSubmit(loginUser)}>
                <div className={css.LoginFormInput}>
                    <div><input type="text" placeholder={'username'} {...register('username')}/></div>
                    <div><input type="text" placeholder={'password'} {...register('password')}/></div>
                </div>

                <button>login</button>
            </form>

            {
                error?.detail && <div>{error.detail}</div>
            }

        </div>
    );
};

export {
    LoginForm
};
