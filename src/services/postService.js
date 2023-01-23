import {axiosService} from "./axiosService";

const postService = {
    getAll: () => axiosService.get('/posts'),
    // getByUserId: (userId) => axiosService.get(`/posts/?userId=${userId}`),
    getByUserId: (userId) => axiosService.get('/posts', {params: {userId}}),
}

export {
    postService
}
