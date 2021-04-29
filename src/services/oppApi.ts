import { TypeInterests } from '../models/auth';
import { TypeOpp } from '../models/opp';
import api from './api';

const urls = {
    getOpps: 'getOpps',
    getFavOpps: 'getFavOpps',
};

const oppApi = {
    getOpps: (interests: TypeInterests) =>
        api.post<TypeOpp[]>(urls.getOpps, { interests }),

    getFavOpps: (favoritesOpportunities: string[]) =>
        api.post<TypeOpp[]>(urls.getFavOpps, { favoritesOpportunities }),
};

export default oppApi;
