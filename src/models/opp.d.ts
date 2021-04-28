import { TypeInterests } from './auth';

export type TypeOpp = {
    address: string;
    createdAt: string;
    description: string;
    duration: string;
    id: string;
    interests: TypeInterests;
    likes: string[];
    name: string;
    open: boolean;
    organization: string;
    period: string;
    photos: string[];
    rating: number;
    requirements: string[];
    usersRegistered: string[];
};
