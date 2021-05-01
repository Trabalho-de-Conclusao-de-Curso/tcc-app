import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const ScrollView = styled.ScrollView``;

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

export const Button = styled.TouchableOpacity``;

export const Image = styled.Image`
    width: 90%;
    height: 200px;
    align-self: center;
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

export const UnRegisterButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 30px;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 6px;
    align-self: center;
    margin-top: 10px;
`;

export const ButtonLabel = styled.Text`
    font-family: RobotoMono;
    color: #ffffff;
    font-size: 15px;
    line-height: 20px;
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
    width: 80%;
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

export const SectionView = styled.View`
    width: 100%;
    padding: 10px;
    background-color: ${props => props.theme.colors.section};
    margin-top: 10px;
`;

export const LblSectionTitle = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    align-self: center;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.font.darker};
`;

export const LblSectionContent = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    flex: 1;
    text-align: center;
    color: ${props => props.theme.colors.font.main};
`;

export const LblSectionContentBold = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${props => props.theme.colors.font.main};
`;

export const BottomView = styled.View`
    height: 10px;
`;
