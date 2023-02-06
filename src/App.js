import React from "react";
import {Route, Routes} from "react-router";

import {MainLayout} from "./layouts";
import {CarsPage, HomePage, UsersPage} from "./pages";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
