import React, { useState } from 'react';
import { TypeInterests } from '../models/auth';

import useAuth from '../contexts/auth/useAuth';
import useUi from '../contexts/ui/useUi';

import { BottomSheet, ListItem } from 'react-native-elements';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import styled from 'styled-components/native';

type TypeProps = {
    open: boolean;
    onClose(): void;
};

const Button = styled.TouchableOpacity``;

const Filter: React.FC<TypeProps> = ({ open, onClose }) => {
    const { filter, setFilter } = useAuth();
    const { theme, strings } = useUi();

    const [values, setValues] = useState<TypeInterests>(filter ? filter : {});
    const [keys, setKeys] = useState<string[]>(
        filter ? Object.keys(filter) : []
    );

    const handleConfirm = () => {
        if (values !== filter) setFilter(values);
        onClose();
    };

    return (
        <BottomSheet modalProps={{}} isVisible={open}>
            <ListItem
                containerStyle={{
                    backgroundColor: theme.colors.background,
                    justifyContent: 'space-between',
                }}
                bottomDivider
            >
                <Button onPress={onClose}>
                    <Icon
                        name="close"
                        color={theme.colors.secondary}
                        size={24}
                    />
                </Button>
                <Button onPress={handleConfirm}>
                    <Icon name="check" color={theme.colors.primary} size={24} />
                </Button>
            </ListItem>
            {keys.map((item, index) => (
                <ListItem
                    containerStyle={{
                        backgroundColor: theme.colors.background,
                    }}
                    key={index}
                    onPress={() =>
                        setValues({ ...values, [item]: !values[item] })
                    }
                >
                    <Icon
                        name={
                            values[item]
                                ? 'check-box'
                                : 'check-box-outline-blank'
                        }
                        color={
                            values[item]
                                ? theme.colors.selected
                                : theme.colors.font.main
                        }
                        size={24}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{ color: theme.colors.font.main }}
                        >
                            {strings[item]}
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
        </BottomSheet>
    );
};

export default Filter;
