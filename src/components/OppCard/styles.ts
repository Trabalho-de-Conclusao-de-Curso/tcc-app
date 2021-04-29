import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    margin-bottom: 10px;
`;

export const HeaderView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
`;

export const RatingView = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LblRating = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.font.main};
    margin-left: 5px;
`;

export const Image = styled.Image`
    width: 90%;
    height: 200px;
    align-self: center;
`;

export const LblName = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 37px;
    letter-spacing: 0.2px;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.font.darker};
`;

export const LblDescription = styled.Text`
    width: 75%;
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    align-self: center;
    text-align: center;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.font.darker};
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 30px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 6px;
    align-self: center;
`;

export const ButtonLabel = styled.Text`
    font-family: RobotoMono;
    color: #ffffff;
    font-size: 15px;
    line-height: 20px;
`;
