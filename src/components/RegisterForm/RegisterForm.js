import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import {userValidator} from "../../validators";
import {userService} from "../../api";

const RegisterForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator),
    });

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const registerUser = async (user) => {
        try {
            await userService.create(user);
            navigate('/login');
        } catch (e) {
            setError(e.response.data);
        }
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(registerUser)}>
                <div>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    {!!errors.username && <span>{errors.username.message}</span>}
                </div>
                <div>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    {!!errors.password && <span>{errors.password.message}</span>}
                </div>
                <button disabled={!isValid}>register</button>
            </form>

            {error && <div>{JSON.stringify(error)}</div>}

        </div>
    );
};

export {
    RegisterForm
};
