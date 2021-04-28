import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-top: 20px;
    background-color: ${props => props.theme.colors.background};
`;

export const AppLogo = styled.Image`
    width: 127px;
    height: 127px;
    border-radius: 100px;
    border-width: 3px;
    border-color: ${props => props.theme.colors.primary};
`;

export const Label = styled.Text`
    font-family: RobotoMono;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.02px;
    color: ${props => props.theme.colors.font.main};
    margin-top: 20px;
`;

export const ButtonLabel = styled.Text`
    font-family: RobotoMono;
    color: #ffffff;
    font-size: 15px;
    line-height: 20px;
`;

export const FacebookButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 30px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 6px;
    margin-top: 40px;
`;

export const GoogleButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 30px;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 6px;
    margin-top: 20px;
`;
