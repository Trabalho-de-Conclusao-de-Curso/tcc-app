import React, { useEffect, useState } from 'react';

import {
    Container,
    ScrollView,
    UserImg,
    LblName,
    LblEmail,
    Divider,
    LblSexNat,
    LblDescription,
    SectionView,
    LblSectionTitle,
    LblSectionContent,
    BottomView,
    LblSectionContentBold,
} from './styles';

//Components
import AppBar from '../../components/AppBar';
import InterestsSection from '../../components/InterestsSection';
import ProfileMenu from '../../components/ProfileMenu';

import useUi from '../../contexts/ui/useUi';
import useAuth from '../../contexts/auth/useAuth';

const index: React.FC = () => {
    const { strings } = useUi();
    const { user } = useAuth();

    const [menu, setMenu] = useState<boolean>(false);

    return (
        <Container>
            <AppBar
                title={strings.appName}
                secondaryIcon="menu"
                onSecondaryAction={() => setMenu(true)}
            />
            <ScrollView>
                <UserImg source={{ uri: user!.photo }} />
                <LblName>{user!.name}</LblName>
                <LblEmail>{user!.email}</LblEmail>
                <Divider />
                {(user!.gender !== '' || user!.nationality !== '') && (
                    <LblSexNat>
                        {`${user!.gender}${
                            user!.gender !== '' && user!.nationality !== ''
                                ? ', '
                                : ''
                        }${user!.nationality}`}
                    </LblSexNat>
                )}
                {user!.presentation !== '' && (
                    <LblDescription>{user!.presentation}</LblDescription>
                )}
                <InterestsSection interests={user!.interests} />
                {user!.languages.length > 0 && (
                    <SectionView>
                        <LblSectionTitle>{strings.languages}</LblSectionTitle>
                        <LblSectionContent>
                            {user!.languages.map((item, index) =>
                                index === user!.languages.length - 1
                                    ? item
                                    : `${item}, `
                            )}
                        </LblSectionContent>
                    </SectionView>
                )}

                {user!.institution !== '' && user!.course !== '' && (
                    <SectionView>
                        <LblSectionTitle>{strings.formation}</LblSectionTitle>
                        <LblSectionContentBold>
                            {user!.institution}
                        </LblSectionContentBold>
                        <LblSectionContent>{user!.course}</LblSectionContent>
                    </SectionView>
                )}
                <BottomView />
            </ScrollView>
            <ProfileMenu open={menu} onClose={() => setMenu(false)} />
        </Container>
    );
};

export default index;
