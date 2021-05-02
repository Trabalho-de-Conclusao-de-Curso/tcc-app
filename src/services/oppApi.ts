import { TypeInterests, TypeRegOppForm } from '../models/auth';
import { TypeOpp } from '../models/opp';
import api from './api';

const urls = {
    getOpps: 'getOpps',
    getFavOpps: 'getFavOpps',
    registerForOpp: 'registerForOpp/',
    cancelRegForOpp: 'cancelRegistration/',
};

const oppApi = {
    getOpps: (interests: TypeInterests) =>
        api.post<TypeOpp[]>(urls.getOpps, { interests }),

    getFavOpps: (favoritesOpportunities: string[]) =>
        api.post<TypeOpp[]>(urls.getFavOpps, { favoritesOpportunities }),

    registerForOpp: (oppId: string, registrationData: TypeRegOppForm) =>
        api.post(urls.registerForOpp + oppId, { registrationData }),

    cancelRegForOpp: (oppId: string, userId: string) =>
        api.post(urls.cancelRegForOpp + userId + '/' + oppId),
};

export default oppApi;
