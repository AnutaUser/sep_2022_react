import {axiosService} from "../../utils";
import {endPoints} from "../endPoints";

const userService = {
    getAll: () => axiosService.get(endPoints.users),
    getById: (id) => axiosService.get(`${endPoints.users}/${id}`),
};

export {
    userService
};
