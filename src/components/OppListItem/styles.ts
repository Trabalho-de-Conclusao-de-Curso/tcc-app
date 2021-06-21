import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    margin-bottom: 10px;
    background-color: ${props => props.theme.colors.section};
    flex-direction: row;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 6px;
`;

export const HeaderView = styled.View`
    flex-direction: row;
    justify-content: space-between;
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
    width: 100px;
    height: 100%;
`;

export const LblName = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 37px;
    letter-spacing: 0.2px;
    color: ${props => props.theme.colors.font.darker};
`;
