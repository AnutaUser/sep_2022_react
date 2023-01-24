import {axiosService2} from "./axiosService";

const API_KEY = 'b6c98ea96595749707f6ca37f215c291';

const movieService = {
    getAll: () => axiosService2.get(`/discover/movie?api_key=${API_KEY}`),
    getById: (id) => axiosService2.get(`/movie/${id}?api_key=${API_KEY}`),
}

export {
    movieService,
    API_KEY
};
