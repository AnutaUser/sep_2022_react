import {axiosService} from './axiosService';

import {urls} from '../configs';

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    updateById: (id, updateCar) => axiosService.put(`${urls.cars}/${id}`, updateCar),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
};

export {
    carService
};
