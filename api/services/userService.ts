import {axiosServices} from "../../utils";
import {endPoints} from "../endpoints";
import {IRes, IUser} from "../../interfaces";

const userService = {
    getALL: (): IRes<IUser[]> => axiosServices.get(endPoints.users),
}

export {
    userService
};