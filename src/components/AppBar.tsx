import React from 'react';
import styled from 'styled-components/native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import useUi from '../contexts/ui/useUi';

const Container = styled.View`
    width: 100%;
    height: 56px;
    background-color: ${props => props.theme.colors.appBar};
    flex-direction: row;
    align-items: center;
`;

const PrimaryButton = styled.TouchableOpacity`
    position: absolute;
    left: 16px;
`;

const SecondaryButton = styled.TouchableOpacity`
    position: absolute;
    right: 16px;
`;

const LblTitle = styled.Text`
    position: absolute;
    width: 100%;
    text-align: center;
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 34px;
    color: ${props => props.theme.colors.font.main};
`;

type TypeProps = {
    primaryIcon?: any;
    secondaryIcon?: any;
    title?: string;
    onPrimaryAction?(): void;
    onSecondaryAction?(): void;
};

const AppBar: React.FC<TypeProps> = props => {
    const {
        primaryIcon,
        secondaryIcon,
        title,
        onPrimaryAction,
        onSecondaryAction,
    } = props;
    const { theme } = useUi();

    return (
        <Container>
            {title && <LblTitle>{title}</LblTitle>}

            {primaryIcon && (
                <PrimaryButton onPress={onPrimaryAction}>
                    <Icon
                        name={primaryIcon}
                        size={24}
                        color={theme.colors.font.main}
                    />
                </PrimaryButton>
            )}

            {secondaryIcon && (
                <SecondaryButton onPress={onSecondaryAction}>
                    <Icon
                        name={secondaryIcon}
                        size={24}
                        color={theme.colors.font.main}
                    />
                </SecondaryButton>
            )}
        </Container>
    );
};

export default AppBar;
