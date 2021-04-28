import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../contexts/auth/useAuth';

//components
import Loading from '../components/Loading';

//Navigators
import MainNav from './MainNav';

//Screens
import SelectInterests from '../screens/SelectInterests';
import SignIn from '../screens/SignIn';

const RootStack = createStackNavigator();

const RootNav: React.FC = () => {
    const { loading, logged, interestsFilled } = useAuth();
    return (
        <>
            {loading ? (
                <Loading />
            ) : logged && !interestsFilled ? (
                <RootStack.Navigator headerMode="none">
                    <RootStack.Screen name="MainNav" component={MainNav} />
                </RootStack.Navigator>
            ) : logged && !interestsFilled ? (
                <RootStack.Screen
                    name="SelectInterests"
                    component={SelectInterests}
                />
            ) : (
                <RootStack.Navigator headerMode="none">
                    <RootStack.Screen name="SignIn" component={SignIn} />
                </RootStack.Navigator>
            )}
        </>
    );
};

export default RootNav;
