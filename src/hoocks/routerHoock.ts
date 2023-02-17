import {Location, useLocation} from "react-router-dom";

interface IState<T> extends Location {
    state: T;
}

const useAppLocation = <S>(): IState<S> => useLocation();

export {
    useAppLocation
};
