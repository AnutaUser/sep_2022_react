import axios from "axios";

import {baseURL} from "../api";

const axiosConfigs = axios.create({baseURL});

export {
    axiosConfigs
};
