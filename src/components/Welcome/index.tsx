import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Layout from '../Layout';
import ButtonWithText from '../ButtonWithText';

const Welcome = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a mi App de prueba</Text>
        <Image
          style={styles.image}
          source={require('../../../public/assets/Logo.webp')}
        />

        <ButtonWithText />
      </View>
    </Layout>
  );
};

export default Welcome;
