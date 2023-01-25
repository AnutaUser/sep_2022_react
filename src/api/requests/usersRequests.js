import {axiosConfigs} from '../../utils';
import {requestEndpoints} from '../endPoints';

const usersRequests = {
    getAll: () => axiosConfigs.get(requestEndpoints.users),
    create: (user) => axiosConfigs.post(requestEndpoints.users, user),
    update: (id, user) => axiosConfigs.patch(`${requestEndpoints.users}/${id}`, user),
    delete: (id) => axiosConfigs.delete(`${requestEndpoints.users}/${id}`
    ),
};

export {
    usersRequests
};
