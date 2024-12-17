import React, {PropsWithChildren} from 'react';
import {RenderOptions, render} from '@testing-library/react-native';

import {Provider} from 'react-redux';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {getStore} from './redux/store';
// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.

const Stack = createNativeStackNavigator();
const store = getStore();
export const renderWithReduxProvider = (
  ui: React.ReactElement,
  {...renderOptions}: RenderOptions = {},
) => {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
};
export const withNavigation = (screen: any, key: string, params?: any) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={key} component={screen} initialParams={params} />
    </Stack.Navigator>
  </NavigationContainer>
);

export const renderWithReduxProviderAndNavigation = (
  ui: React.ReactElement,
  {...renderOptions}: RenderOptions = {},
) => {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>{children}</Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
};
