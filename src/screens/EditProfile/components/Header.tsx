import React from 'react';
import styled from 'styled-components/native';
import useUi from '../../../contexts/ui/useUi';

import personIcon from '../../../assets/person.png';
import { MaterialIcons as Icon } from '@expo/vector-icons';

type TypeProps = {
    onNext(): void;
    onPrevious(): void;
};

const Container = styled.View`
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
`;
const Image = styled.Image`
    width: 60px;
    height: 60px;
`;
const Button = styled.TouchableOpacity``;

const Header: React.FC<TypeProps> = ({ onNext, onPrevious }) => {
    const { theme } = useUi();
    return (
        <Container>
            <Button onPress={onPrevious}>
                <Icon
                    name="chevron-left"
                    size={30}
                    color={theme.colors.font.main}
                />
            </Button>

            <Image source={personIcon} resizeMode="contain" />

            <Button onPress={onNext}>
                <Icon
                    name="chevron-right"
                    size={30}
                    color={theme.colors.font.main}
                />
            </Button>
        </Container>
    );
};

export default Header;
