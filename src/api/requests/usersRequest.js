import {axiosConfig} from "../../utils";
import {endPoints} from "../endPoints";

const usersRequest = {
    getAll: () => axiosConfig.get(endPoints.users),
    getById: (id) => axiosConfig.get(endPoints.users + '/' + id),
};

export {
    usersRequest
};
