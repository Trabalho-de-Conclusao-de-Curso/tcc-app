import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypeInterests, TypeUser, TypeLoginData } from '../../models/auth';
import * as Facebook from 'expo-facebook';
import * as GoogleSignIn from 'expo-google-sign-in';
import { authApi } from '../../services';

type AuthContextData = {
    user: TypeUser | null;
    logged: boolean;
    loading: boolean;
    filter: TypeInterests | null;
    interestsFilled: boolean;
    uploadInterests: (interests: TypeInterests) => void;
    uploadPushToken: () => void;
    cancelRegForOpp: () => void;
    registerForOpp: () => void;
    uploadFavOpps: () => void;
    editUser: () => void;
    logout: () => void;
    login: (type: string) => void;
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

    const login = useCallback(async (type: string) => {
        switch (type) {
            default: {
                console.log('not implemented');
                break;
            }
            case 'facebook': {
                try {
                    setLoading(true);
                    await Facebook.initializeAsync({
                        appId: '107557898058270',
                    });

                    const loginResult: any = await Facebook.logInWithReadPermissionsAsync(
                        {
                            permissions: ['public_profile'],
                        }
                    );

                    const {
                        type,
                        token,
                        expirationDate,
                        permissions,
                        declinedPermissions,
                        userId,
                    } = loginResult;

                    if (type !== 'success') break;

                    let res: any = await fetch(
                        `https://graph.facebook.com/v10.0/${userId}/?fields=name,email,picture&access_token=${token}`
                    );

                    res = await res.json();

                    const loginData: TypeLoginData = {
                        name: res.name,
                        email: res.email,
                        photoUrl: res.picture.data.url,
                        id: res.id,
                    };

                    const { data } = await authApi.login(loginData);

                    setUser(data);

                    await AsyncStorage.setItem(
                        tokenKey + 'userData',
                        JSON.stringify(data)
                    );
                } catch ({ message }) {
                    console.log(`Facebook Login Error: ${message}`);
                } finally {
                    setLoading(false);
                    break;
                }
            }
            case 'google': {
                try {
                    setLoading(true);
                    await GoogleSignIn.initAsync();

                    await GoogleSignIn.askForPlayServicesAsync();
                    const { type, user } = await GoogleSignIn.signInAsync();

                    if (type !== 'success') break;

                    const loginData: TypeLoginData = {
                        name: user!.displayName!,
                        email: user!.email,
                        photoUrl: user!.photoURL!,
                        id: user!.uid,
                    };

                    const { data } = await authApi.login(loginData);

                    setUser(data);

                    await AsyncStorage.setItem(
                        tokenKey + 'userData',
                        JSON.stringify(data)
                    );
                } catch (err) {
                    console.log(err);
                } finally {
                    setLoading(false);
                    break;
                }
            }
        }
    }, []);

    const logout = useCallback(async () => {
        setLoading(true);
        setUser(null);
        await AsyncStorage.setItem(tokenKey + 'userData', 'null');
        setLoading(false);
    }, []);

    const uploadInterests = useCallback(async (interests: TypeInterests) => {
        try {
            setLoading(true);
            console.log(user?.id, interests);
            await authApi.uploadInterests(user!.id, interests);

            const newUser: TypeUser = { ...user!, interests };

            await AsyncStorage.setItem(
                tokenKey + 'userData',
                JSON.stringify(newUser)
            );
            setUser(newUser);

            await AsyncStorage.setItem(
                tokenKey + 'filterData',
                JSON.stringify(interests)
            );
            setFilter(interests);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, []);

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
