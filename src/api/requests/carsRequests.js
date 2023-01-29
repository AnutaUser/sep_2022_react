import {axiosConfigs} from "../../utils";
import {endPoints} from "../endPpoints";

const carsRequests = {
    getAll: () => axiosConfigs.get(endPoints.cars),
    create: (car) => axiosConfigs.post(endPoints.cars, car),
    update: (id, car) => axiosConfigs.patch(`${endPoints.cars}/${id}`, car),
    delete: (id) => axiosConfigs.delete(`${endPoints.cars}/${id}`),
};

export {
    carsRequests
};
