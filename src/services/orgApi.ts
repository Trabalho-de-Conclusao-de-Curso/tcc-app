import { TypeOrg } from '../models/org';
import api from './api';

const urls = {
    getOrgData: 'getOrgData/',
};

const orgApi = {
    getOrgData: (orgId: string) => api.get<TypeOrg>(urls.getOrgData + orgId),
};

export default orgApi;
