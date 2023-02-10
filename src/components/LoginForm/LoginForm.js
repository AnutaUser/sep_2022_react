import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import css from './LoginForm.module.css';
import {authService} from "../../api";

const LoginForm = () => {

    const {reset, register, handleSubmit} = useForm();

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async (userCredential) => {
        try {
            await authService.login(userCredential);
            navigate('/cars');
        } catch (e) {
            if (e.response.status === 401) {
                setError(e.response.data);
            }
        }
        reset();
    };

    return (
        <div className={css.LoginForm}>
            <div>
                <form onSubmit={handleSubmit(login)}>

                    <div className={css.LoginFormInput}>
                        <input type="text" placeholder={'username'} {...register('username')}/>
                    </div>

                    <div className={css.LoginFormInput}>
                        <input type="text" placeholder={'password'} {...register('password')}/>
                    </div>

                    <button>logIn</button>
                </form>
            </div>
            {
                error?.detail && <div>{error.detail}</div>
            }
        </div>
    );
};

export {
    LoginForm,
};
