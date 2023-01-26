import {axiosConfig} from "../../utils";
import {endPoints} from "../endPoints";

const commentsRequest = {
    getAll: () => axiosConfig.get(endPoints.comments),
    getById: (postId) => axiosConfig.get(endPoints.comments + '/' + postId),
};

export {
    commentsRequest
};
