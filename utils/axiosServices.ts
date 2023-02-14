import axios from "axios";

import {baseURL} from "../api/endpoints";

const axiosServices = axios.create({baseURL});

export {
    axiosServices
};
