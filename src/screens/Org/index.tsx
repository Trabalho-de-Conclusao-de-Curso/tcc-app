import React from 'react';
import { StackActions } from '@react-navigation/native';

import useUi from '../../contexts/ui/useUi';
import useData from '../../contexts/data/useData';
import { useNavigation } from '@react-navigation/core';

import {
    Container,
    ScrollView,
    OrgImg,
    LblName,
    LblDescription,
    SectionView,
    LblSectionTitle,
    LblSectionContent,
} from './styles';

//Components
import AppBar from '../../components/AppBar';
import Loading from '../../components/Loading';
import InterestsSection from '../../components/InterestsSection';

const index: React.FC = () => {
    const { strings } = useUi();
    const { org, loading } = useData();
    const navigation = useNavigation();

    return (
        <Container>
            <AppBar
                title={strings.appName}
                primaryIcon="chevron-left"
                onPrimaryAction={() => navigation.dispatch(StackActions.pop())}
            />
            {loading || !org ? (
                <Loading />
            ) : (
                <ScrollView>
                    <OrgImg source={{ uri: org!.logo }} />
                    <LblName>{org!.name}</LblName>
                    <LblDescription>{org!.description}</LblDescription>
                    <InterestsSection interests={org!.interests} />
                    <SectionView>
                        <LblSectionTitle>{strings.address}</LblSectionTitle>
                        <LblSectionContent>{org!.address}</LblSectionContent>
                    </SectionView>
                    <SectionView>
                        <LblSectionTitle>{strings.contact}</LblSectionTitle>
                        <LblSectionContent>{org!.phone}</LblSectionContent>
                    </SectionView>
                </ScrollView>
            )}
        </Container>
    );
};

export default index;
