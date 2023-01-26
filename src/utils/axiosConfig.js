import axios from "axios";

import {baseURL} from "../api";

const axiosConfig = axios.create({baseURL});

export {
    axiosConfig
};
