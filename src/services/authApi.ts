import { TypeInterests, TypeRegOppForm, TypeUser } from '../models/auth';
import api from './api';

const urls = {
    registerUser: 'registerUser',
    getUser: 'getUser/',
    editUser: 'editProfile/',
    uploadInterests: 'uploadInterests',
    uploadPushToken: 'uploadPushToken',
    uploadFavOpps: 'uploadFavOpps/',
    changePhoto: 'changePhoto/',
    registerForOpp: 'registerForOpp',
    cancelRegForOpp: 'cancelRegistration',
};

const authApi = {
    //TODO: implement registerUser
    registerUser: () => null,

    getUserData: (id: string) => api.get<TypeUser>(urls.getUser + id),

    editUser: (id: string, data: TypeUser) =>
        api.post(urls.editUser + id, data),

    uploadInterests: (interests: TypeInterests) =>
        api.post(urls.uploadInterests, interests),

    uploadPushToken: (token: string) => api.post(urls.uploadPushToken, token),

    uploadFavOpps: (userId: string, data: string[]) =>
        api.post(urls.uploadFavOpps + userId, data),

    changePhoto: (id: string, data: FormData) =>
        api.post(urls.changePhoto + id, data),

    registerForOpp: (oppId: string, data: TypeRegOppForm) =>
        api.post(urls.registerForOpp + oppId, data),

    cancelRegForOpp: (oppId: string, userId: string) =>
        api.post(urls.cancelRegForOpp + oppId + '/' + userId),
};

export default authApi;
