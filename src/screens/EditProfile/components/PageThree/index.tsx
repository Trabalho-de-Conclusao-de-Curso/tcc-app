import React, { useEffect, useState } from 'react';
import useUi from '../../../../contexts/ui/useUi';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import {
    Container,
    Divider,
    Section,
    LblName,
    Input,
    AddButton,
    RowView,
    ItemContainer,
    ItemLabel,
    Button,
} from './styles';
import TextInput from '../TextInput';

type TypeProps = {
    presentation: string;
    languages: string[];
    errors: { [key: string]: string };
    handleChange(key: string, value: string | string[]): void;
};

const index: React.FC<TypeProps> = props => {
    const { errors, presentation, handleChange, languages } = props;
    const { strings, theme } = useUi();

    const [languageV, setLanguageV] = useState<string[]>(languages);
    const [newLanguage, setNewLanguage] = useState<string>('');

    const handleAdd = () => {
        setLanguageV([...languageV, newLanguage]);
        setNewLanguage('');
    };

    const handleRemove = (item: string) => {
        setLanguageV(
            languageV.filter(value => {
                return value !== item;
            })
        );
    };

    useEffect(() => {
        if (languageV !== languages) handleChange('languages', languageV);
    }, [languageV]);

    return (
        <Container>
            <TextInput
                name={strings.presentation}
                placeholder={strings.typeSomething}
                value={presentation}
                onChange={value => handleChange('presentation', value)}
                error={errors.presentation}
                multiline
            />
            <Divider />
            <Section>
                <LblName>{strings.languages}</LblName>
                <RowView>
                    <Input
                        placeholder={strings.typeSomething}
                        placeholderTextColor={theme.colors.font.main}
                        value={newLanguage}
                        onChangeText={setNewLanguage}
                    />
                    <AddButton onPress={handleAdd}>
                        <Icon
                            name="add"
                            size={30}
                            color={theme.colors.primary}
                        />
                    </AddButton>
                </RowView>
                <RowView>
                    {languageV.map((item, index) => (
                        <ItemContainer key={index}>
                            <ItemLabel>{item}</ItemLabel>
                            <Button onPress={() => handleRemove(item)}>
                                <Icon
                                    name="close"
                                    size={20}
                                    color={theme.colors.secondary}
                                />
                            </Button>
                        </ItemContainer>
                    ))}
                </RowView>
            </Section>
        </Container>
    );
};

export default index;
