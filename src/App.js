import React from "react";
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarsPage, HomePage, NotFoundPage, UsersPage} from "./pages";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export {
    App
};
