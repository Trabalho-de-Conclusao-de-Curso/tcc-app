import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const ScrollView = styled.ScrollView`
    padding-top: 16px;
`;

export const UserImg = styled.Image`
    width: 127px;
    height: 127px;
    border-radius: 100px;
    border-width: 3px;
    border-color: ${props => props.theme.colors.primary};
    align-self: center;
`;

export const LblName = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.font.darker};
    align-self: center;
    margin-top: 18px;
`;

export const LblEmail = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    color: ${props => props.theme.colors.font.main};
    align-self: center;
`;

export const Divider = styled.View`
    width: 80%;
    height: 0.5px;
    background-color: ${props => props.theme.colors.font.main};
    align-self: center;
    margin-top: 3px;
`;

export const LblSexNat = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    margin-top: 2px;
    color: ${props => props.theme.colors.font.main};
    align-self: center;
`;

export const LblDescription = styled.Text`
    width: 80%;
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: ${props => props.theme.colors.font.darker};
    align-self: center;
    margin-top: 20px;
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
    height: 20px;
`;
