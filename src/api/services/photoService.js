import {axiosService} from "../../utils";
import {endPoints} from "../endPoints";

const photoService = {
    getAll: () => axiosService.get(endPoints.photos),
    getById: (id) => axiosService.get(`${endPoints.photos}/${id}`),
};

export {
    photoService
};
