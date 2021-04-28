import { TypeInterests } from './auth';

export type TypeOrg = {
    accountFilled: boolean;
    address: string;
    country: string;
    description: string;
    email: string;
    id: string;
    interests: TypeInterests;
    logo: string;
    name: string;
    phone: string;
    photos: string[];
    rating: number;
};
