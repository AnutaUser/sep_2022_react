import {ICar} from "../../interfaces";
import {endPoints} from "../index";
import {axiosService, IRes} from "../../utils";

const carService = {
    getAll: (): IRes<ICar[]> => axiosService.get(endPoints.cars.cars),
    getById: (id: string): IRes<ICar> => axiosService.get(endPoints.cars.byId(id)),
};

export {
    carService
};
