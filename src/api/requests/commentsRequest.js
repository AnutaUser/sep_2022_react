import {axiosConfig} from "../../utils";
import {endPoints} from "../endPoints";

const commentsRequest = {
    getAll: () => axiosConfig.get(endPoints.comments),
    getByPostId: (postId) => axiosConfig.get(endPoints.commentsByPostId + postId + '/comments'),
};

export {
    commentsRequest
};
