import {createContext, useReducer} from "react";

import {myUserReducer, initialUsers, MyCarReducer, carsInnit} from "../reducers";

const StateContext = createContext(null);

const StateProvider = ({children}) => {

    const reducers = {
        userReducer: useReducer(myUserReducer, null, initialUsers),
        carReducer: useReducer(MyCarReducer, null, carsInnit),
    };

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    )
};

export {
    StateProvider,
    StateContext
};
