import {axiosConfig} from "../../utils";
import {endPoints} from "../endPoints";

const albumsRequest = {
    getAll: () => axiosConfig.get(endPoints.albums),
};

export {
    albumsRequest
};
