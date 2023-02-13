import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices/carSlice";
import {loginReducer} from "./slices/loginSlice";

const rootReducer = combineReducers({
    cars: carReducer,
    login: loginReducer,
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
};
