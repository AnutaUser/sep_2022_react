import React from "react";
import {Navigate, useLocation} from "react-router";

import {useAuthContext} from "../hooks/useAuthContext";

const RequireAuth = ({children}) => {

    const {user} = useAuthContext();
    const location = useLocation();

    if (!user) {
        return <Navigate to={'/login'} state={location}/>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export {
    RequireAuth
};
