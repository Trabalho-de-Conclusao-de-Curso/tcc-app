export type TypeUser = {
    accountFilled: boolean;
    bornDay: string;
    course: string;
    email: string;
    facebook: string;
    favoriteOpportunities: string[];
    gender: string;
    id: string;
    institution: string;
    interests: TypeInterests;
    languages: string[];
    linkedin: string;
    name: string;
    nationality: string;
    photo: string;
    presentation: string;
    skills: string[];
    twitter: string[];
};

export type TypeInterests = {
    animals: boolean;
    arts: boolean;
    education: boolean;
    environment: boolean;
    health: boolean;
    humanRights: boolean;
    others: boolean;
    sports: boolean;
};

export type TypeRegOppForm = {
    presentation: string;
    userName: string;
    userPhoto: string;
    userUid: string;
};
