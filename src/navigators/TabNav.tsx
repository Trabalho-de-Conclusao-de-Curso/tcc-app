import React from 'react';
import {
    createBottomTabNavigator,
    BottomTabBarOptions,
    BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/core';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import useUi from '../contexts/ui/useUi';

//Screens
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

type TypeScrenOpts = (props: {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: any;
}) => BottomTabNavigationOptions;

const TabNav: React.FC = () => {
    const { theme } = useUi();
    const tabOptions: BottomTabBarOptions = {
        style: {
            backgroundColor: theme.colors.appBar,
        },
        labelStyle: { display: 'none' },
        tabStyle: {},
        activeTintColor: theme.colors.font.main,
        inactiveTintColor: theme.colors.unselected,
    };

    const screenOpts: TypeScrenOpts = props => ({
        tabBarIcon: ({ color, size }) => {
            let iconName: any;

            if (props.route.name === 'Home') iconName = 'home';
            else if (props.route.name === 'Feed') iconName = 'description';
            else if (props.route.name === 'Favorites') iconName = 'favorite';
            else if (props.route.name === 'Profile') iconName = 'person';

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
        },
    });

    const options = {
        tabBarLabel: '',
    };

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={tabOptions}
            screenOptions={screenOpts}
        >
            <Tab.Screen
                options={options}
                name="Favorites"
                component={Favorites}
            />
            <Tab.Screen options={options} name="Home" component={Home} />
            <Tab.Screen options={options} name="Feed" component={Feed} />
            <Tab.Screen options={options} name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default TabNav;
