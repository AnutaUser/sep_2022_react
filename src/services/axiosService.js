import axios from 'axios';

const axiosService = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})
const axiosService2 = axios.create({baseURL: 'https://api.themoviedb.org/3'})

export {
    axiosService,
    axiosService2
}
