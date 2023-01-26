import {endPoints} from "../endPoints";
import {axiosConfig} from "../../utils";

const todosRequest = {
    getAll: () => axiosConfig.get(endPoints.todos),
};

export {
    todosRequest
};
