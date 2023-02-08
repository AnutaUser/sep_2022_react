import {axiosService} from "../../utils";
import {endPoints} from "../endPoints";

const carService = {
    getAll: () => axiosService.get(endPoints.cars),
    getById: (id) => axiosService.get(`${endPoints.cars}/${id}`),
    create: (newCar) => axiosService.post(endPoints.cars, newCar),
    update: (id, updateCar) => axiosService.put(`${endPoints.cars}/${id}`, updateCar),
    deleteById: (id) => axiosService.delete(`${endPoints.cars}/${id}`),
};

export {
    carService
};
