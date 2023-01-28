import {axiosConfig} from "../../utils";
import {endPoints} from "../endPoints";

const postsRequest = {
    getAll: () => axiosConfig.get(endPoints.posts),
    getByUserId: (userId) => axiosConfig.get(endPoints.postsByUserId + userId + '/posts'),
};

export {
    postsRequest
};
