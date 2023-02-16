import axios, {AxiosResponse} from "axios";

import {baseURL} from "../api";

export type IRes<T> = Promise<AxiosResponse<T>>;

const axiosService = axios.create({baseURL});

export {
    axiosService
};
