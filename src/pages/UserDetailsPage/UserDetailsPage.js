import React from "react";
import {Outlet} from "react-router-dom";

import {UserDetails} from "../../components";

const UserDetailsPage = () => {

    return (
        <div>
            <UserDetails/>
            <Outlet/>
        </div>
    );
};

export {
    UserDetailsPage
};
