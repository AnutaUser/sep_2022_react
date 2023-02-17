import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarDetailsPage, CarsPage, HomePage, NotFoundPage} from "./pages";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>

                <Route path={'cars'} element={<CarsPage/>}>
                    <Route path={':id'} element={<CarDetailsPage/>}/>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
};
