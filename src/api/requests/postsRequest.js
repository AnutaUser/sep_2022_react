import {axiosConfig} from "../../utils";
import {endPoints} from "../endPoints";

const postsRequest = {
    getById: (id) => axiosConfig.get(endPoints.posts + '/' + id),
};

export {
    postsRequest
};
