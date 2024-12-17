/**
 * @format
 */

import 'react-native';
import {it, expect, describe} from '@jest/globals';
import {renderWithReduxProvider, withNavigation} from '../src/utils';
import HomeScreen from '../src/screens/Home';
import {screen} from '@testing-library/react-native';

describe('Home Screen tests', () => {
  it('should render home screen properly', () => {
    const {getByText} = renderWithReduxProvider(
      withNavigation(HomeScreen, 'Home'),
    );
    expect(screen).toBeDefined();
    expect(getByText(/Welcome to my test App!/i)).toBeTruthy();
  });
});
