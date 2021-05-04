import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const ButtonsView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 30px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 6px;
    align-self: center;
    margin-top: 10px;
`;

export const SaveButtonLabel = styled.Text`
    font-family: RobotoMono;
    color: #ffffff;
    font-size: 15px;
    line-height: 20px;
`;

export const BackButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 30px;
    border-color: ${props => props.theme.colors.secondary};
    border-radius: 6px;
    border-width: 1px;
    align-self: center;
    margin-top: 10px;
`;

export const BackButtonLabel = styled.Text`
    font-family: RobotoMono;
    color: ${props => props.theme.colors.secondary};
    font-size: 15px;
    line-height: 20px;
`;

export const LblPageTitle = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 37px;
    letter-spacing: 0.02px;
    color: ${props => props.theme.colors.font.darker};
    text-align: center;
    margin-bottom: 10px;
`;
