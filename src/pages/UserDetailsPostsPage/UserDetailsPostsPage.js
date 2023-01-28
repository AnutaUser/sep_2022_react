import React from "react";
import {Outlet} from "react-router-dom";

import {UserDetailsSinglePosts} from "../../components";


const UserDetailsPostsPage = () => {

    return (
        <div>
            <UserDetailsSinglePosts/>
            <Outlet/>
        </div>
    );
};

export {
    UserDetailsPostsPage
};
