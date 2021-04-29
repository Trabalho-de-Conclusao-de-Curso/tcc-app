import React, { useEffect, useState } from 'react';

import useUi from '../../contexts/ui/useUi';
import useData from '../../contexts/data/useData';
import useAuth from '../../contexts/auth/useAuth';

import { Container } from './styles';
import { ScrollView } from 'react-native';

//Components
import AppBar from '../../components/AppBar';
import OppCard from '../../components/OppCard';
import Loading from '../../components/Loading';
import Filter from '../../components/Filter';

const index: React.FC = () => {
    const { strings } = useUi();
    const { opps, loadOpps, loading } = useData();
    const { filter, uploadFavOpps } = useAuth();

    const [filterOpen, setFilterOpen] = useState<boolean>(false);

    useEffect(() => {
        if (filter) loadOpps(filter);
    }, [filter]);

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
                            onPress={() => console.log('pressed')}
                        />
                    ))}
                </ScrollView>
            )}
            <Filter open={filterOpen} onClose={() => setFilterOpen(false)} />
        </Container>
    );
};

export default index;
