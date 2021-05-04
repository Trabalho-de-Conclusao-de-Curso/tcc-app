import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const PhotoSection = styled.View`
    width: 100%;
    flex-direction: row;
    background-color: ${props => props.theme.colors.section};
    padding: 10px;
    align-items: center;
    justify-content: space-around;
`;

export const UserImg = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border-width: 3px;
    border-color: ${props => props.theme.colors.primary};
    align-self: center;
`;

export const EditPhotoButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 30px;
    border-color: ${props => props.theme.colors.primary};
    border-radius: 6px;
    border-width: 1px;
    align-self: center;
    margin-top: 10px;
`;

export const EditPhotoButtonLabel = styled.Text`
    font-family: RobotoMono;
    color: ${props => props.theme.colors.primary};
    font-size: 15px;
    line-height: 20px;
`;

export const Divider = styled.View`
    height: 10px;
`;
