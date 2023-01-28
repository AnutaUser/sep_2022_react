import {axiosConfig} from "../../utils";
import {endPoints} from "../endPoints";

const photosRequest = {
    getById: (id) => axiosConfig.get(endPoints.photosByAlbumId + id + '/photos'),
};

export {
    photosRequest
};
