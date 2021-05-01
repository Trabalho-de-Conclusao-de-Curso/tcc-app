import React, { useEffect, useState } from 'react';
import { TypeOpp } from '../../models/opp';
import { StackActions } from '@react-navigation/native';

import useUi from '../../contexts/ui/useUi';
import useData from '../../contexts/data/useData';
import useAuth from '../../contexts/auth/useAuth';
import { useNavigation } from '@react-navigation/core';

import { Container } from './styles';
import { ScrollView } from 'react-native';

//Components
import AppBar from '../../components/AppBar';
import OppCard from '../../components/OppCard';
import Loading from '../../components/Loading';
import Filter from '../../components/Filter';

const index: React.FC = () => {
    const { strings } = useUi();
    const { opps, loadOpps, loading, setOpp } = useData();
    const { filter, uploadFavOpps } = useAuth();
    const navigation = useNavigation();

    const [filterOpen, setFilterOpen] = useState<boolean>(false);

    useEffect(() => {
        if (filter) loadOpps(filter);
    }, [filter]);

    const handleSelectOpp = (opp: TypeOpp) => {
        setOpp(opp);
        navigation.dispatch(StackActions.push('Opportunity'));
    };

    return (
        <Container>
            <AppBar
                title={strings.appName}
                secondaryIcon="filter-alt"
                onSecondaryAction={() => setFilterOpen(true)}
            />
            {loading ? (
                <Loading />
            ) : (
                <ScrollView>
                    {opps.map((item, index) => (
                        <OppCard
                            key={index}
                            opp={item}
                            onFavorite={() => uploadFavOpps(item.id)}
                            onPress={() => handleSelectOpp(item)}
                        />
                    ))}
                </ScrollView>
            )}
            <Filter open={filterOpen} onClose={() => setFilterOpen(false)} />
        </Container>
    );
};

export default index;
