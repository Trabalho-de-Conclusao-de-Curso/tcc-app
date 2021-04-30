import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    margin-bottom: 10px;
`;

export const RowView = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 6px;
    padding-left: 16px;
    padding-right: 16px;
`;

export const OrgImg = styled.Image`
    width: 36px;
    height: 36px;
    border-radius: 100px;
    border-width: 1px;
    border-color: ${props => props.theme.colors.font.main};
`;

export const LblOrg = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    color: ${props => props.theme.colors.font.main};
    text-align: left;
    margin-left: 6px;
    width: ${props => `${Dimensions.get('window').width - 80}px`};
`;

export const Button = styled.TouchableOpacity``;

export const PostImg = styled.Image`
    width: 100%;
    height: 200px;
    margin-top: 2px;
`;

export const LblBody = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    width: 80%;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.font.main};
`;

export const LblLikes = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    color: ${props => props.theme.colors.font.main};
    margin-left: 6px;
`;

export const Divider = styled.View`
    width: ${props => `${Dimensions.get('window').width - 32}px`};
    height: 0.5px;
    background-color: ${props => props.theme.colors.font.main};
    align-self: center;
    margin-top: 3px;
`;
