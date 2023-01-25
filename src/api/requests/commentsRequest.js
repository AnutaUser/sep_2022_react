import {axiosConfigs} from '../../utils';
import {requestEndpoints} from '../endPoints';

const commentsRequest = {
    getAll: () => axiosConfigs.get(requestEndpoints.comments),
    create: (comment) => axiosConfigs.post(requestEndpoints.comments, comment),
    update: (id, comment) => axiosConfigs.patch(requestEndpoints.comments + '/' + id, comment),
    delete: (id) => axiosConfigs.patch(requestEndpoints.comments + '/' + id),
};

export {
    commentsRequest
};
