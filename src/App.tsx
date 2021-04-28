import React from 'react';

import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import useUi from './contexts/ui/useUi';

const SafeArea = styled.View`
    background-color: ${props => props.theme.colors.background};
    flex: 1;
`;

const App: React.FC = () => {
    const { theme } = useUi();

    return (
        <ThemeProvider theme={theme}>
            <StatusBar style={theme.title === 'light' ? 'dark' : 'light'} />
            <SafeAreaView
                style={{ backgroundColor: theme.colors.appBar, flex: 1 }}
            >
                <SafeArea></SafeArea>
            </SafeAreaView>
        </ThemeProvider>
    );
};

export default App;
