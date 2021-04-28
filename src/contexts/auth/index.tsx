import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypeInterests, TypeUser } from '../../models/auth';
import {} from '../../services';

type AuthContextData = {
    user: TypeUser | null;
    logged: boolean;
    loading: boolean;
    filter: TypeInterests | null;
    interestsFilled: boolean;
    uploadInterests: () => void;
    uploadPushToken: () => void;
    cancelRegForOpp: () => void;
    registerForOpp: () => void;
    uploadFavOpps: () => void;
    editUser: () => void;
    logout: () => void;
    login: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const tokenKey = '@tccapp:token:';

    const [filter, setFilter] = useState<TypeInterests | null>(null);
    const [user, setUser] = useState<TypeUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState(false);
    const [interestsFilled, setInterestsFilled] = useState(false);

    useEffect(() => {
        const loadStoragedData = async () => {
            setLoading(true);

            //Get user data from local storage
            const userData = await AsyncStorage.getItem(tokenKey + 'userData');
            setUser(userData ? JSON.parse(userData) : null);

            //Get filter data from local storage
            const filterData = await AsyncStorage.getItem(
                tokenKey + 'filterData'
            );
            setFilter(filterData ? JSON.parse(filterData) : null);

            setLoading(false);
        };

        loadStoragedData();
    }, []);

    useEffect(() => {
        setLogged(user !== null);

        if (user === null) return;

        let intFilled = false;
        const interestsKeys = Object.keys(user.interests);

        interestsKeys.forEach(item => {
            if (user.interests[item]) intFilled = true;
        });

        setInterestsFilled(intFilled);
    }, [user]);

    //TODO: implement editUser
    const editUser = useCallback(async () => {}, []);

    //TODO: implementar login
    const login = useCallback(async () => {}, []);

    //TODO: implement logout
    const logout = useCallback(async () => {}, []);

    //TODO: implement editUser
    const uploadInterests = useCallback(async () => {}, []);

    //TODO implement uploadPushToken
    const uploadPushToken = useCallback(async () => {}, []);

    //TODO implement cancelRegForOpp
    const cancelRegForOpp = useCallback(async () => {}, []);

    //TODO implement registerForOpp
    const registerForOpp = useCallback(async () => {}, []);

    //TODO implement uploadFavOpps
    const uploadFavOpps = useCallback(async () => {}, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                logged,
                loading,
                filter,
                interestsFilled,
                editUser,
                login,
                logout,
                uploadInterests,
                cancelRegForOpp,
                registerForOpp,
                uploadPushToken,
                uploadFavOpps,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
