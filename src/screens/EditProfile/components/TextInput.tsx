import React from 'react';
import styled from 'styled-components/native';
import useUi from '../../../contexts/ui/useUi';

type TypeProps = {
    onChange(value: string): void;
    name: string;
    value: string;
    hint?: string;
    placeholder?: string;
    error?: string;
    multiline?: boolean;
};

const Container = styled.View`
    width: 100%;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${props => props.theme.colors.section};
`;

const LblName = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.font.darker};
`;

const Input = styled.TextInput`
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
`;

const MultilineInput = styled.TextInput`
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
    height: 200px;
`;

const LblHint = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.colors.font.light};
    margin-top: 10px;
`;

const LblError = styled.Text`
    font-family: RobotoMono;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.colors.secondary};
    margin-left: 10px;
    margin-top: 6px;
`;

const TextInput: React.FC<TypeProps> = props => {
    const {
        onChange,
        value,
        hint,
        placeholder,
        error,
        name,
        multiline,
    } = props;
    const { theme } = useUi();

    return (
        <Container>
            <LblName>{name}</LblName>
            {multiline ? (
                <MultilineInput
                    style={{ textAlignVertical: 'top' }}
                    placeholder={placeholder}
                    placeholderTextColor={theme.colors.font.main}
                    value={value}
                    onChangeText={onChange}
                    multiline
                />
            ) : (
                <Input
                    placeholder={placeholder}
                    placeholderTextColor={theme.colors.font.main}
                    value={value}
                    onChangeText={onChange}
                />
            )}

            {error && <LblError>{error}</LblError>}
            {hint && <LblHint>* {hint}</LblHint>}
        </Container>
    );
};

export default TextInput;
