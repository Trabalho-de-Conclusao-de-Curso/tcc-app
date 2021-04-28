import React from 'react';
import useUi from '../../contexts/ui/useUi';

import {
    Container,
    AppLogo,
    Label,
    FacebookButton,
    ButtonLabel,
    GoogleButton,
} from './styles';

//@ts-ignore
import appLogo from '../../assets/icon.png';

const index: React.FC = () => {
    const { strings, theme } = useUi();
    return (
        <Container>
            <AppLogo source={appLogo} resizeMode="cover" />
            <Label>{strings.signIn}</Label>
            <FacebookButton onPress={() => console.log('facebook')}>
                <ButtonLabel>{strings.signInFacebook}</ButtonLabel>
            </FacebookButton>
            <GoogleButton onPress={() => console.log('google')}>
                <ButtonLabel>{strings.signInGoogle}</ButtonLabel>
            </GoogleButton>
        </Container>
    );
};

export default index;
