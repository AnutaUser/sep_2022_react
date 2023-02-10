import {axiosService} from "../../utils";
import {endPoints} from "../endPoints";

const userService = {
    create: (user) => axiosService.post(endPoints.users, user),
};

export {
    userService
};
