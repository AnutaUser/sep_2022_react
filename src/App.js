import React from "react";
import {Route, Routes} from "react-router";

import {MainLayout} from "./layouts";
import {CarsPage, HomePage, LoginPage, NotFoundPage} from "./pages";
import {RequireAuth} from "./components";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>

                    <Route index element={<HomePage/>}/>

                    <Route path={'cars'} element={
                        <RequireAuth>
                            <CarsPage/>
                        </RequireAuth>
                    }/>

                    <Route path={'login'} element={<LoginPage/>}/>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
                }
            </Routes>
        </div>
    );
};

export {App};
