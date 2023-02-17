import {ICar} from "../../interfaces";
import {endPoints} from "../index";
import {axiosService, IRes} from "../../utils";

const carService = {
    getAll: (): IRes<ICar[]> => axiosService.get(endPoints.cars.cars),
    getById: (id: string): IRes<ICar> => axiosService.get(endPoints.cars.byId(id)),
    create: (car: ICar): IRes<ICar> => axiosService.post(endPoints.cars.cars, car),
    updateById: (id: string, car: ICar): IRes<ICar> => axiosService.put(`${endPoints.cars.cars}/${id}`, car),
    deleteById: (id: string) => axiosService.delete(`${endPoints.cars.cars}/${id}`),
};

export {
    carService
};
