import {axiosConfig} from "../../utils";
import {endPoints} from "../endPoints";

const carsRequest = {
    getAll: () => axiosConfig.get(endPoints.cars),
    create: (newCar) => axiosConfig.post(endPoints.cars, newCar),
    update: (carId, updateCar) => axiosConfig.patch(`${endPoints.cars}/${carId}`, updateCar),
    delete: (carId) => axiosConfig.delete(`${endPoints.cars}/${carId}`),
};

export {
    carsRequest
};
