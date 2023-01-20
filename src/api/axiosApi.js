import axios from "axios";

const axiosApi = axios.create({baseURL: 'https://api.spacexdata.com/v3'})

export {
    axiosApi
};
