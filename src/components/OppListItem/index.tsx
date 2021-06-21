import React, { useEffect, useState } from 'react';

import useAuth from '../../contexts/auth/useAuth';
import useUi from '../../contexts/ui/useUi';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import { TypeOpp } from '../../models/opp';

import { TouchableOpacity } from 'react-native';
import {
    Container,
    HeaderView,
    RatingView,
    LblRating,
    Image,
    LblName,
    Content,
} from './styles';

type TypeProps = {
    opp: TypeOpp;
    onFavorite(): void;
    onPress(): void;
};

const OppCard: React.FC<TypeProps> = props => {
    const { opp, onFavorite, onPress } = props;
    const { user } = useAuth();
    const { theme, strings } = useUi();

    const [favorited, setFavorited] = useState<boolean>(false);

    useEffect(() => {
        setFavorited(user!.favoritesOpportunities.includes(opp.id));
    }, [user]);

    return (
        <Container onPress={onPress}>
            <Image source={{ uri: opp.photos[0] }} />
            <Content>
                <LblName>{opp.name}</LblName>
                <HeaderView>
                    <RatingView>
                        <Icon
                            name="star"
                            size={30}
                            color={theme.colors.rating}
                        />
                        <LblRating>{opp.rating}</LblRating>
                    </RatingView>
                    <TouchableOpacity onPress={onFavorite}>
                        <Icon
                            name={favorited ? 'favorite' : 'favorite-border'}
                            size={30}
                            color={theme.colors.secondary}
                        />
                    </TouchableOpacity>
                </HeaderView>
            </Content>
        </Container>
    );
};

export default OppCard;
