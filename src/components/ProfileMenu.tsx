import React from 'react';

import { BottomSheet, ListItem, Switch } from 'react-native-elements';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import styled from 'styled-components/native';

import useUi from '../contexts/ui/useUi';
import useAuth from '../contexts/auth/useAuth';

import { useNavigation } from '@react-navigation/core';
import { StackActions } from '@react-navigation/native';

type TypeProps = {
    open: boolean;
    onClose(): void;
};

const Button = styled.TouchableOpacity``;

const ProfileMenu: React.FC<TypeProps> = ({ open, onClose }) => {
    const { theme, strings, toggleTheme } = useUi();
    const { logout } = useAuth();
    const navigation = useNavigation();

    const handleEdit = () => {
        navigation.dispatch(StackActions.push('EditProfile'));
        onClose();
    };

    const handleDisconnect = () => {
        logout();
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
                <Switch
                    value={theme.title !== 'light'}
                    color={
                        theme.title === 'light'
                            ? theme.colors.primary
                            : theme.colors.secondary
                    }
                    onTouchStart={toggleTheme}
                />
            </ListItem>
            <ListItem
                containerStyle={{ backgroundColor: theme.colors.background }}
                onPress={handleEdit}
            >
                <ListItem.Content>
                    <ListItem.Title style={{ color: theme.colors.font.main }}>
                        {strings.editProfile}
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem
                containerStyle={{ backgroundColor: theme.colors.background }}
                onPress={handleDisconnect}
            >
                <ListItem.Content>
                    <ListItem.Title style={{ color: theme.colors.font.main }}>
                        {strings.disconnect}
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </BottomSheet>
    );
};

export default ProfileMenu;
