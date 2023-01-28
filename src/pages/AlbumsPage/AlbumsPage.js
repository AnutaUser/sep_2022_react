import React from "react";
import {Outlet} from "react-router-dom";

import {Albums} from "../../components";

const AlbumsPage = () => {

    return (
        <div>
            <Albums/>
            <Outlet/>
        </div>
    );
};

export {
    AlbumsPage
};
