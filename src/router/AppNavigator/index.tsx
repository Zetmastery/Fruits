import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SvgIcon from '../../components/SvgIcon';
import {HomeStackScreen, FruitStackScreen} from '../StackNavigator';

const Tab = createBottomTabNavigator();
const TabIconHome = () => <SvgIcon name="home" />;
const TabIconList = () => <SvgIcon name="list" />;
const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: TabIconHome,
        }}
      />

      <Tab.Screen
        name="Fruits"
        component={FruitStackScreen}
        options={{
          tabBarLabel: 'Fruits',
          tabBarIcon: TabIconList,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
