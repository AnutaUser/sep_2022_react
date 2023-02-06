import React from "react";
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CatsDogsPage, HomePage, NotFoundPage} from "./pages";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'pets'} element={<CatsDogsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {
    App
};
