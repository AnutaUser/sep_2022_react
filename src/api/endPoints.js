const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const auth = '/auth';

const endPoints = {
    cars: '/cars',
    users: './users',
    auth :{
        login: auth,
        refresh: `${auth}/refresh`,
        me: `${auth}/me`,
    }
};

export {
    baseURL,
    endPoints
};
