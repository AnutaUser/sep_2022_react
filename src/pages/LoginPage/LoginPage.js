import React from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {loginValidator} from "../../validators";
import {useAuthContext} from "../../components";
import {useLocation, useNavigate} from "react-router";

const LoginPage = () => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: "all",
        resolver: joiResolver(loginValidator),
    });

    const {logIn, users} = useAuthContext();
    const navigate = useNavigate();
    const {state} = useLocation();

    const submit = (value) => {
        console.log(users)
        if (value) {
            logIn(value);
        }
        navigate(state.pathname, {replace: true});
    };
    console.log(users);

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    {errors.username && <span>{errors.username.message}</span>}
                </div>
                <div>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <button disabled={!isValid}>login</button>
            </form>
        </div>
    );
}

export {
    LoginPage
};
