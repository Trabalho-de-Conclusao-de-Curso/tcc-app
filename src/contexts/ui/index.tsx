import React, { createContext, useState, useEffect, useCallback } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import * as Localization from 'expo-localization';

import getStrings from '../../utils/strings';

type TypeUiContext = {
    strings: TypeStrings;
    theme: string;
    language: string;
    loading: boolean;
};

const UiContext = createContext<TypeUiContext>({} as TypeUiContext);

export const UiProvider: React.FC = ({ children }) => {
    const tokenKey = '@tccapp:token:';

    const [strings, setStrings] = useState<TypeStrings>({});
    const [theme, setTheme] = useState<string>('light');
    const [language, setLanguage] = useState<string>('pt-br');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLanguage(Localization.locale);

        const loadStoragedData = async () => {
            setLoading(true);

            //Get theme data from local storage
            const themeData = await AsyncStorage.getItem(tokenKey + 'theme');

            if (themeData !== null) setTheme(themeData);

            setLoading(false);
        };

        loadStoragedData();
    }, []);

    useEffect(() => {
        setStrings(getStrings(language));
    }, [language]);

    return (
        <UiContext.Provider
            value={{
                strings,
                theme,
                language,
                loading,
            }}
        >
            {children}
        </UiContext.Provider>
    );
};

export default UiContext;
