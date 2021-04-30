import React, { useState } from 'react';
import styled from 'styled-components/native';
import useUi from '../contexts/ui/useUi';
import { TypeInterests } from '../models/auth';

//Assets
const icons: { [key: string]: any } = {
    sports: require('../assets/interests/unselected/Ball.png'),
    education: require('../assets/interests/unselected/GradHat.png'),
    humanRights: require('../assets/interests/unselected/Hand.png'),
    environment: require('../assets/interests/unselected/Leaf.png'),
    animals: require('../assets/interests/unselected/Paw.png'),
    health: require('../assets/interests/unselected/Pills.png'),
    arts: require('../assets/interests/unselected/Masks.png'),
    others: require('../assets/interests/unselected/Others.png'),
};

const Container = styled.View`
    width: 100%;
    padding: 10px;
    background-color: ${props => props.theme.colors.section};
`;

const LblHeader = styled.Text`
    width: 100%;
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.font.darker};
    text-align: center;
`;

const RowView = styled.View`
    width: 100%;
    margin-top: 6px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const ItemView = styled.View`
    flex-direction: row;
    padding: 4px;
    align-items: center;
`;

const IconImg = styled.Image`
    width: 40px;
    height: 40px;
`;

const LblInterest = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.font.light};
    margin-left: 6px;
    text-align: center;
    width: 125px;
`;

type TypeProps = {
    interests: TypeInterests;
};

const InterestSection: React.FC<TypeProps> = ({ interests }) => {
    const { strings } = useUi();

    const [keys] = useState<string[]>(Object.keys(interests));

    return (
        <Container>
            <LblHeader>{strings.interests}</LblHeader>
            <RowView>
                {keys.map((key, index) => (
                    <ItemView key={index}>
                        <IconImg source={icons[key]} resizeMode="contain" />
                        <LblInterest>{strings[key]}</LblInterest>
                    </ItemView>
                ))}
            </RowView>
        </Container>
    );
};

export default InterestSection;
