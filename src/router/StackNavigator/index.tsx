import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home';
import FruitsScreen from '../../screens/Fruits';

const HomeStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home page" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export const FruitStackScreen = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <UserStack.Screen name="Fruits page" component={FruitsScreen} />
    </UserStack.Navigator>
  );
};
