import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const LblHeader = styled.Text`
    width: 100%;
    text-align: center;
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.font.main};
`;

export const InterestsContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.section};
`;

export const LblSubHeader = styled.Text`
    width: 100%;
    text-align: center;
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.font.main};
`;

export const ScrollView = styled.ScrollView`
    flex: 1;
    padding: 10px;
`;

export const ButtonLabel = styled.Text`
    font-family: RobotoMono;
    color: #ffffff;
    font-size: 15px;
    line-height: 20px;
`;

export const ConfirmButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 6px;
    margin-top: 20px;
    margin-bottom: 10px;
    align-self: center;
`;
