export type TypeUser = {
    accountFilled: boolean;
    bornDay: string;
    course: string;
    email: string;
    facebook: string;
    favoritesOpportunities: string[];
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
    [key: string]: boolean;
};

export type TypeRegOppForm = {
    presentation: string;
    userName: string;
    userPhoto: string;
    userUid: string;
};

export type TypeLoginData = {
    name: string;
    email: string;
    id: string;
    photoUrl: string;
};
