import {axiosService} from "../../utils";
import {endPoints} from "../endPoints";

const carService = {
    getAll: (page=1) => axiosService.get(endPoints.cars, {params:{page}}),
    getById: (id) => axiosService.get(`${endPoints.cars}/${id}`),
    create: (newCar, page) => axiosService.post(endPoints.cars, newCar, {params:{page}}),
    update: (id, updateCar) => axiosService.put(`${endPoints.cars}/${id}`, updateCar),
    deleteById: (id) => axiosService.delete(`${endPoints.cars}/${id}`),
};

export {
    carService
};
