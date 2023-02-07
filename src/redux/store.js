import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/userSlice";
import {photoReducer} from "./slices/photoSlice";

const rootReducer = combineReducers({
    users: userReducer,
    photos: photoReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
};
