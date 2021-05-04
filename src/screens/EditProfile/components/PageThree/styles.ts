import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Divider = styled.View`
    height: 10px;
`;

export const Section = styled.View`
    width: 100%;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${props => props.theme.colors.section};
`;

export const RowView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const LblName = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.font.darker};
`;

export const Input = styled.TextInput`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: ${props => props.theme.colors.font.main};
    padding: 4px;
    border-width: 1px;
    border-color: ${props => props.theme.colors.font.light};
    border-radius: 6px;
    margin-top: 10px;
    padding-left: 6px;
    padding-right: 6px;
    flex: 1;
    margin-right: 6px;
`;

export const AddButton = styled.TouchableOpacity`
    margin-top: 13px;
`;

export const ItemContainer = styled.View`
    background-color: ${props => props.theme.colors.appBar};
    border-radius: 6px;
    padding: 6px;
    flex-direction: row;
    margin-top: 6px;
    margin-right: 6px;
`;

export const Button = styled.TouchableOpacity``;

export const ItemLabel = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: ${props => props.theme.colors.font.darker};
`;
