import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';

const ButtonWithText = () => {
  const [text, setText] = useState('Presiona aquí');
  return (
    <View style={styles.container}>
      <Button title="Dame Click" onPress={() => setText('¡Hola, mundo!')} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ButtonWithText;
