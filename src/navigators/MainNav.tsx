import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import defaultScreenOpts from '../utils/defaultScreenOpts';

//Screens
import Opp from '../screens/Opp';
import Register from '../screens/Register';
import Org from '../screens/Org';
import EditProfile from '../screens/EditProfile';

//Navigators
import TabNav from './TabNav';

const MainStack = createStackNavigator();

const MainNav: React.FC = () => {
    return (
        <MainStack.Navigator headerMode="none">
            <MainStack.Screen
                name="TabNav"
                component={TabNav}
                options={defaultScreenOpts}
            />
            <MainStack.Screen
                name="Opportunity"
                component={Opp}
                options={defaultScreenOpts}
            />
            <MainStack.Screen
                name="Register"
                component={Register}
                options={defaultScreenOpts}
            />
            <MainStack.Screen
                name="Organization"
                component={Org}
                options={defaultScreenOpts}
            />
            <MainStack.Screen
                name="EditProfile"
                component={EditProfile}
                options={defaultScreenOpts}
            />
        </MainStack.Navigator>
    );
};

export default MainNav;
