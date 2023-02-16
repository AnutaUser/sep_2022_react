import {axiosService} from "../../utils";
import {endPoints} from "../endPoints";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {
    login: async (cred) => {
        const response = await axiosService.post(endPoints.auth.login, cred);

        if (response.status === 200) {
            authService.setTokens(response.data);
        }

        return response;
    },

    refresh: (refresh) => axiosService.post(endPoints.auth.refresh, {refresh}),
    me: () => axiosService.get(endPoints.auth.me),

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

export {authService};
