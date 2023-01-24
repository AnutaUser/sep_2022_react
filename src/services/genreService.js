import {axiosService2} from "./axiosService";
import {API_KEY} from "./movieService";

const genreService = {
    getAll: () => axiosService2.get(`/genre/movie/list?api_key=${API_KEY}`)
};

export {
    genreService
};
