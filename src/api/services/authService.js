import {axiosService} from "../../utils";
import {endPoints} from "../endPoints";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {

    login: async (cred) => {
        const response = await axiosService.post(endPoints.login, cred);
        if (response.status === 200) {
            authService.setTokens(response.data);
        }
        return response;
    },

    refresh: async (refresh) => {
        const response = await axiosService.post(endPoints.refresh, {refresh});
        if (response.status === 200) {
            authService.setTokens(response.data);
        }
        return response;
    },

    me: () => axiosService.get(endPoints.me),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
    },

    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey),

    deleteTokens: () => {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    },

    isAuthenticated: () => !!localStorage.getItem(accessTokenKey),

};

export {
    authService
};
