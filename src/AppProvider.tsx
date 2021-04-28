import React from 'react';

import { AuthProvider } from './contexts/auth';
import { DataProvider } from './contexts/data';
import { UiProvider } from './contexts/ui';

import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppProviders: React.FC = ({ children }) => {
    return (
        <SafeAreaProvider>
            <UiProvider>
                <AuthProvider>
                    <DataProvider>{children}</DataProvider>
                </AuthProvider>
            </UiProvider>
        </SafeAreaProvider>
    );
};

export default AppProviders;
