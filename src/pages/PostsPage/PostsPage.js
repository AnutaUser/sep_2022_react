import React from "react";
import {Outlet} from "react-router-dom";

import {Posts} from "../../components";

const PostsPage = () => {

    return (
        <div>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {
    PostsPage
};

