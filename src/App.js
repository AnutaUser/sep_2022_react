import React from "react";
import {Route, Routes} from "react-router-dom";

import {AuthRequireLayout, MainLayout} from "./layouts";
import {CarsPage, HomePage, LoginPage, NotFoundPage, RegisterPage} from "./pages";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>

                    <Route element={<AuthRequireLayout/>}>
                        <Route path={'/cars'} element={<CarsPage/>}/>
                    </Route>

                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
