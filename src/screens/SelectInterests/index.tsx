import React, { useEffect, useState } from 'react';
import useAuth from '../../contexts/auth/useAuth';
import useUi from '../../contexts/ui/useUi';

import InterestsSelector from '../../components/InterestsSelector';

import {
    Container,
    LblHeader,
    InterestsContainer,
    LblSubHeader,
    ScrollView,
    ConfirmButton,
    ButtonLabel,
} from './styles';
import { Alert } from 'react-native';
import { TypeInterests } from '../../models/auth';

const index: React.FC = () => {
    const { user, uploadInterests } = useAuth();
    const { strings } = useUi();

    const [interests, setInterests] = useState<TypeInterests>({});

    const handleConfirm = () => {
        const objKeys = Object.keys(interests);

        if (objKeys.length === 0)
            return Alert.alert(
                strings.errorConfirm,
                strings.mustSelectAtLeastOne
            );

        let isSelected = false;

        objKeys.forEach(item => {
            if (interests[item]) isSelected = true;
        });

        if (!isSelected)
            return Alert.alert(
                strings.errorConfirm,
                strings.mustSelectAtLeastOne
            );

        uploadInterests(interests);
    };

    return (
        <Container>
            <LblHeader>{strings.hello + user!.name}</LblHeader>
            <InterestsContainer>
                <ScrollView style={{ flex: 1, padding: 10 }}>
                    <LblSubHeader>{strings.howDoYouWannaHelp}</LblSubHeader>
                    <InterestsSelector onInterestsChange={setInterests} />
                    <ConfirmButton onPress={handleConfirm}>
                        <ButtonLabel>{strings.confirm}</ButtonLabel>
                    </ConfirmButton>
                </ScrollView>
            </InterestsContainer>
        </Container>
    );
};

export default index;
