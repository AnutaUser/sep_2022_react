import {useContext} from "react";

import {StateContext} from "../hocs";

const useAppReducer = (item) => item(useContext(StateContext));

export {
    useAppReducer
};
