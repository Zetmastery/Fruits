import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, RouteName} from '../../../interfaces/navigation';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SvgIcon from '../../SvgIcon';

interface HeaderProps {
  ShowBack?: boolean;
}

const Header = (props: HeaderProps) => {
  const navigation: NavigationProp<RootStackParamList, RouteName> =
    useNavigation();

  const insets = useSafeAreaInsets();
  const goBackHandler = async () => {
    navigation.goBack();
  };

  const containerTestStyle = [
    {
      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  ];

  return (
    <View style={containerTestStyle}>
      <View style={styles.controlsContainer}>
        {props.ShowBack ? (
          <TouchableOpacity
            style={styles.back}
            onPress={goBackHandler}
            activeOpacity={0.85}>
            <SvgIcon name={'arrow-left'} size={25} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Header;
