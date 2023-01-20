import {axiosApi} from "./axiosApi";

const spaceXApi = {
    getAll: () => axiosApi.get('/launches').then(value => value.data),
};

export {
    spaceXApi
};
