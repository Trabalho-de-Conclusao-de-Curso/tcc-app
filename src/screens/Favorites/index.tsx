import React, { useEffect, useState } from 'react';

import useUi from '../../contexts/ui/useUi';
import useData from '../../contexts/data/useData';
import useAuth from '../../contexts/auth/useAuth';

import { Container } from './styles';
import { ScrollView } from 'react-native';

//Components
import AppBar from '../../components/AppBar';
import OppLsitItem from '../../components/OppListItem';
import Loading from '../../components/Loading';

const index: React.FC = () => {
    const { strings } = useUi();
    const { favOpps, loading, loadFavOpps } = useData();
    const { user, uploadFavOpps } = useAuth();

    const [favs, setFavs] = useState<string[]>([]);

    useEffect(() => {
        if (user === null) return;

        if (user.favoritesOpportunities !== favs) {
            loadFavOpps(user.favoritesOpportunities);
            setFavs(user.favoritesOpportunities);
        }
    }, [user]);

    return (
        <Container>
            <AppBar title={strings.appName} />
            {loading ? (
                <Loading />
            ) : (
                <ScrollView style={{ paddingTop: 10 }}>
                    {favOpps.map((item, index) => (
                        <OppLsitItem
                            key={index}
                            opp={item}
                            onFavorite={() => uploadFavOpps(item.id)}
                            onPress={() => console.log('pressed')}
                        />
                    ))}
                </ScrollView>
            )}
        </Container>
    );
};

export default index;
