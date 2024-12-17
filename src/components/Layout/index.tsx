import React from 'react';
// import {ViewStyle} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from './Header';
import styles from './styles';

type LayoutProps = {
  children: React.ReactNode;
  // onBack?: () => void;
  // style?: ViewStyle;
  // headerStyle?: ViewStyle;
  // customHeight?: boolean;
};

const Layout = (props: LayoutProps) => {
  return (
    <SafeAreaProvider style={styles.providerFlex}>
      <Header
      // onBack={props.onBack}
      // headerStyle={props.headerStyle}
      // customHeight={props.customHeight}
      />
      {props.children}
    </SafeAreaProvider>
  );
};

export default Layout;
