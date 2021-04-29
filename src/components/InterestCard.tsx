import React from 'react';

import styled from 'styled-components/native';

//Assets
const unselectedIcons: { [key: string]: any } = {
    ball: require('../assets/interests/unselected/Ball.png'),
    gradHat: require('../assets/interests/unselected/GradHat.png'),
    hand: require('../assets/interests/unselected/Hand.png'),
    leaf: require('../assets/interests/unselected/Leaf.png'),
    paw: require('../assets/interests/unselected/Paw.png'),
    pills: require('../assets/interests/unselected/Pills.png'),
    masks: require('../assets/interests/unselected/Masks.png'),
    others: require('../assets/interests/unselected/Others.png'),
};

const selectedIcons: { [key: string]: any } = {
    ball: require('../assets/interests/selected/Ball.png'),
    gradHat: require('../assets/interests/selected/GradHat.png'),
    hand: require('../assets/interests/selected/Hand.png'),
    leaf: require('../assets/interests/selected/Leaf.png'),
    paw: require('../assets/interests/selected/Paw.png'),
    pills: require('../assets/interests/selected/Pills.png'),
    masks: require('../assets/interests/selected/Masks.png'),
    others: require('../assets/interests/selected/Others.png'),
};

const Container = styled.TouchableOpacity`
    width: 138px;
    height: 138px;
    background: ${props => props.theme.colors.background};
    box-shadow: 0px 3px 6px #cfcccc;
    border-radius: 10px;
    align-items: center;
    padding: 6px;
    margin-bottom: 10px;
    justify-content: space-around;
`;

const Image = styled.Image`
    width: 63px;
    height: 63px;
`;

const Label = styled.Text`
    width: 90%;
    text-align: center;
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: ${props => props.theme.colors.font.main};
`;

type TypeProps = {
    selected: boolean;
    onPress(): void;
    icon: string;
    label: string;
};

const InterestCard: React.FC<TypeProps> = ({
    selected,
    onPress,
    icon,
    label,
}) => {
    return (
        <Container onPress={onPress}>
            <Image
                source={selected ? selectedIcons[icon] : unselectedIcons[icon]}
                resizeMode="contain"
            />
            <Label>{label}</Label>
        </Container>
    );
};

export default InterestCard;
