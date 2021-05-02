import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const LblHeader = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.2px;
    color: ${props => props.theme.colors.font.darker};
    margin: 10px;
    text-align: center;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: ${props => props.theme.colors.font.main};
    padding: 10px;
`;

export const ButtonsView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 10px;
`;

export const RegisterButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 30px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 6px;
    align-self: center;
    margin-top: 10px;
`;

export const RegButtonLabel = styled.Text`
    font-family: RobotoMono;
    color: #ffffff;
    font-size: 15px;
    line-height: 20px;
`;

export const CancelButton = styled.TouchableOpacity`
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

export const CancelButtonLabel = styled.Text`
    font-family: RobotoMono;
    color: ${props => props.theme.colors.secondary};
    font-size: 15px;
    line-height: 20px;
`;
