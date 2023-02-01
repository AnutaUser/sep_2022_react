import React, {useRef} from "react";

import {useAuthContext} from "../../components/hooks";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {

    const username = useRef();

    const {login} = useAuthContext();
    const navigate = useNavigate();
    const {state} = useLocation();

    const logIn = () => {
        login(username.current.value);
        navigate(state.pathname, {replace: true});
    };

    return (
        <div>
            <input type="text" placeholder={'username'} ref={username}/>
            <button onClick={()=> logIn()}>Login</button>
        </div>
    );
};

export {
    LoginPage
};
