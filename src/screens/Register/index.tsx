import React, { useState } from 'react';
import { StackActions } from '@react-navigation/native';
import { TypeRegOppForm } from '../../models/auth';

import useUi from '../../contexts/ui/useUi';
import useAuth from '../../contexts/auth/useAuth';
import useData from '../../contexts/data/useData';
import { useNavigation } from '@react-navigation/core';

import {
    ButtonsView,
    Container,
    LblHeader,
    TextInput,
    CancelButton,
    CancelButtonLabel,
    RegisterButton,
    RegButtonLabel,
} from './styles';
import { Alert, Keyboard } from 'react-native';

//Components
import AppBar from '../../components/AppBar';
import Loading from '../../components/Loading';

const index: React.FC = () => {
    const { strings, theme } = useUi();
    const { user } = useAuth();
    const { registerForOpp, loading } = useData();
    const navigation = useNavigation();

    const [presentation, setPresentation] = useState<string>('');

    const handleRegister = async () => {
        Keyboard.dismiss();

        const data: TypeRegOppForm = {
            presentation,
            userName: user!.name,
            userPhoto: user!.photo,
            userUid: user!.id,
        };

        const response: boolean = await registerForOpp(data);

        if (response)
            Alert.alert(strings.congratulations, strings.registered, [
                {
                    text: strings.ok,
                    onPress: () => navigation.dispatch(StackActions.pop()),
                },
            ]);
    };

    return (
        <Container>
            <AppBar title={strings.appName} />
            {loading ? (
                <Loading />
            ) : (
                <Container>
                    <LblHeader>{strings.presentationLetter}</LblHeader>
                    <TextInput
                        style={{ textAlignVertical: 'top' }}
                        placeholder={strings.typeSomething}
                        value={presentation}
                        onChangeText={setPresentation}
                        multiline
                        placeholderTextColor={theme.colors.font.main}
                    />
                    <ButtonsView>
                        <CancelButton
                            onPress={() =>
                                navigation.dispatch(StackActions.pop())
                            }
                        >
                            <CancelButtonLabel>
                                {strings.cancel}
                            </CancelButtonLabel>
                        </CancelButton>
                        <RegisterButton onPress={handleRegister}>
                            <RegButtonLabel>{strings.register}</RegButtonLabel>
                        </RegisterButton>
                    </ButtonsView>
                </Container>
            )}
        </Container>
    );
};

export default index;
