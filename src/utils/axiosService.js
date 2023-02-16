import axios from "axios";

import {authService, baseURL} from "../api";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    if (authService.isAuthenticated()) {
        const accessToken = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

// axiosService.interceptors.response.use((config) => {
//
// });

export {
    axiosService
};
