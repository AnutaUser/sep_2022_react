import {axiosService} from "./axiosService";

const postService = {
    getAll: () => axiosService.get('/posts').then(value => value.data),
    getById: (id) => axiosService.get('/posts/' + id).then(value => value.data),
}

export {
    postService
};
