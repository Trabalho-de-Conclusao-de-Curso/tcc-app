import {
    TypeInterests,
    TypeLoginData,
    TypeRegOppForm,
    TypeUser,
} from '../models/auth';
import api from './api';

const urls = {
    registerUser: 'registerUser',
    editUser: 'editProfile/',
    uploadInterests: 'uploadInterests/',
    uploadPushToken: 'uploadPushToken',
    uploadFavOpps: 'uploadFavList/',
    changePhoto: 'changePhoto/',
    registerForOpp: 'registerForOpp',
    cancelRegForOpp: 'cancelRegistration',
    login: 'login',
};

const authApi = {
    //TODO: implement registerUser
    registerUser: () => null,

    login: (data: TypeLoginData) => api.post<TypeUser>(urls.login, data),

    editUser: (id: string, data: TypeUser) =>
        api.post(urls.editUser + id, data),

    uploadInterests: (id: string, interests: TypeInterests) =>
        api.post(urls.uploadInterests + id, { interests }),

    uploadPushToken: (token: string) => api.post(urls.uploadPushToken, token),

    uploadFavOpps: (userId: string, favoritesOpportunities: string[]) =>
        api.post(urls.uploadFavOpps + userId, { favoritesOpportunities }),

    changePhoto: (id: string, data: FormData) =>
        api.post(urls.changePhoto + id, data),

    registerForOpp: (oppId: string, data: TypeRegOppForm) =>
        api.post(urls.registerForOpp + oppId, data),

    cancelRegForOpp: (oppId: string, userId: string) =>
        api.post(urls.cancelRegForOpp + oppId + '/' + userId),
};

export default authApi;
