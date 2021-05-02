import React, { useEffect, useState } from 'react';
import { StackActions } from '@react-navigation/native';

import useUi from '../../contexts/ui/useUi';
import useData from '../../contexts/data/useData';
import useAuth from '../../contexts/auth/useAuth';
import { useNavigation } from '@react-navigation/core';

import {
    Container,
    ScrollView,
    HeaderView,
    RatingView,
    LblRating,
    Button,
    Image,
    RegisterButton,
    ButtonLabel,
    LblName,
    LblDescription,
    SectionView,
    LblSectionTitle,
    LblSectionContent,
    UnRegisterButton,
} from './styles';
import { MaterialIcons as Icon } from '@expo/vector-icons';

//Components
import AppBar from '../../components/AppBar';
import InterestsSection from '../../components/InterestsSection';
import { BottomView } from '../Profile/styles';

const index: React.FC = () => {
    const { strings, theme } = useUi();
    const { opp, cancelRegForOpp, loadOrg } = useData();
    const { user, uploadFavOpps } = useAuth();
    const navigation = useNavigation();

    const [favorited, setFavorited] = useState<boolean>(false);

    useEffect(() => {
        setFavorited(user!.favoritesOpportunities.includes(opp!.id));
    }, [user]);

    const handleOrg = () => {
        loadOrg(opp!.organization);
        navigation.dispatch(StackActions.push('Organization'));
    };

    return (
        <Container>
            <AppBar
                title={strings.appName}
                primaryIcon="chevron-left"
                onPrimaryAction={() => navigation.dispatch(StackActions.pop())}
            />
            <ScrollView>
                <HeaderView>
                    <RatingView>
                        <Icon
                            name="star"
                            size={30}
                            color={theme.colors.rating}
                        />
                        <LblRating>{opp!.rating}</LblRating>
                    </RatingView>
                    <Button onPress={() => uploadFavOpps(opp!.id)}>
                        <Icon
                            name={favorited ? 'favorite' : 'favorite-border'}
                            size={30}
                            color={theme.colors.secondary}
                        />
                    </Button>
                </HeaderView>
                <Image source={{ uri: opp!.photos[0] }} />

                {opp!.usersRegistered.includes(user!.id) ? (
                    <UnRegisterButton onPress={() => cancelRegForOpp(user!.id)}>
                        <ButtonLabel>{strings.unRegister}</ButtonLabel>
                    </UnRegisterButton>
                ) : (
                    <RegisterButton
                        onPress={() =>
                            navigation.dispatch(StackActions.push('Register'))
                        }
                    >
                        <ButtonLabel>{strings.register}</ButtonLabel>
                    </RegisterButton>
                )}

                <LblName>{opp!.name}</LblName>
                <LblDescription>{opp!.description}</LblDescription>
                <InterestsSection interests={opp!.interests} />
                <SectionView>
                    <LblSectionTitle>{strings.requirements}</LblSectionTitle>
                    <LblSectionContent>{opp!.requirements}</LblSectionContent>
                </SectionView>
                <SectionView>
                    <LblSectionTitle>{strings.address}</LblSectionTitle>
                    <LblSectionContent>{opp!.address}</LblSectionContent>
                </SectionView>
                <SectionView>
                    <LblSectionTitle>
                        {strings.periodAndDuration}
                    </LblSectionTitle>
                    <LblSectionContent>{opp!.period}</LblSectionContent>
                    <LblSectionContent>{opp!.duration}</LblSectionContent>
                </SectionView>
                <LblName>{strings.socialProject}</LblName>
                <LblDescription>{strings.socialProjInfo}</LblDescription>
                <UnRegisterButton onPress={handleOrg}>
                    <ButtonLabel>{strings.knowMore}</ButtonLabel>
                </UnRegisterButton>
                <BottomView />
            </ScrollView>
        </Container>
    );
};

export default index;
