import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const ScrollView = styled.ScrollView``;

export const OrgImg = styled.Image`
    width: 127px;
    height: 127px;
    border-radius: 100px;
    border-width: 3px;
    border-color: ${props => props.theme.colors.secondary};
    align-self: center;
    margin-top: 10px;
`;

export const LblName = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 37px;
    letter-spacing: 0.02px;
    color: ${props => props.theme.colors.font.darker};
    text-align: center;
    margin-top: 10px;
    width: 90%;
    align-self: center;
`;

export const LblDescription = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    width: 90%;
    align-self: center;
    color: ${props => props.theme.colors.font.darker};
    margin-top: 10px;
    margin-bottom: 20px;
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
