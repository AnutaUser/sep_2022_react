import React from "react";
import {Route, Routes} from "react-router";

import {MainLayout} from "./layouts";
import {HomePage, NotFoundPage, PhotosPage, UsersPage} from "./pages";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/photos'} element={<PhotosPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
